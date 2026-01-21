"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { Trash2, Plus, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("collaborators");
  
  // Form states
  const [collabName, setCollabName] = useState("");
  const [collabLogo, setCollabLogo] = useState("");

  const [teacherName, setTeacherName] = useState("");
  const [teacherRole, setTeacherRole] = useState("");
  const [teacherPhoto, setTeacherPhoto] = useState("");

  // Data states
  const [collaborators, setCollaborators] = useState<any[]>([]);
  const [teachers, setTeachers] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const fetchData = async () => {
    const colSnap = await getDocs(collection(db, "collaborators"));
    setCollaborators(colSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    
    const teachSnap = await getDocs(collection(db, "teachers"));
    setTeachers(teachSnap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  const handleAddCollaborator = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!collabName || !collabLogo) return;
    await addDoc(collection(db, "collaborators"), {
      name: collabName,
      logoUrl: collabLogo,
      createdAt: new Date()
    });
    setCollabName("");
    setCollabLogo("");
    fetchData();
  };

  const handleAddTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherName || !teacherRole) return;
    await addDoc(collection(db, "teachers"), {
      name: teacherName,
      role: teacherRole,
      photoUrl: teacherPhoto,
      createdAt: new Date()
    });
    setTeacherName("");
    setTeacherRole("");
    setTeacherPhoto("");
    fetchData();
  };

  const handleDelete = async (collectionName: string, id: string) => {
    if (confirm("Are you sure?")) {
      await deleteDoc(doc(db, collectionName, id));
      fetchData();
    }
  };

  if (loading || !user) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Admin</h1>
          <button 
            onClick={() => signOut(auth)}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
          <button 
            onClick={() => setActiveTab("collaborators")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "collaborators" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-zinc-800"}`}
          >
            Collaborators
          </button>
          <button 
             onClick={() => setActiveTab("teachers")}
             className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "teachers" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-zinc-800"}`}
          >
            Teachers
          </button>
        </div>

        {activeTab === "collaborators" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm h-fit">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Add New Collaborator</h3>
              <form onSubmit={handleAddCollaborator} className="space-y-4">
                <input 
                  value={collabName}
                  onChange={(e) => setCollabName(e.target.value)}
                  placeholder="Company Name" 
                  className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                />
                <input 
                  value={collabLogo}
                  onChange={(e) => setCollabLogo(e.target.value)}
                  placeholder="Logo URL (https://...)" 
                  className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                  Add Collaborator
                </button>
              </form>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Existing Collaborators</h3>
              <div className="space-y-3">
                {collaborators.map((col) => (
                  <div key={col.id} className="flex items-center justify-between p-3 border rounded-lg dark:border-zinc-700">
                    <div className="flex items-center gap-3">
                      <img src={col.logoUrl} alt={col.name} className="w-10 h-10 object-contain bg-white rounded" />
                      <span className="font-medium dark:text-white">{col.name}</span>
                    </div>
                    <button onClick={() => handleDelete("collaborators", col.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                {collaborators.length === 0 && <p className="text-gray-500">No collaborators found.</p>}
              </div>
            </div>
          </div>
        )}

        {activeTab === "teachers" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm h-fit">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Add New Teacher</h3>
              <form onSubmit={handleAddTeacher} className="space-y-4">
                <input 
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  placeholder="Full Name" 
                  className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                />
                <input 
                  value={teacherRole}
                  onChange={(e) => setTeacherRole(e.target.value)}
                  placeholder="Role (e.g. Head of Dept)" 
                  className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                />
                 <input 
                  value={teacherPhoto}
                  onChange={(e) => setTeacherPhoto(e.target.value)}
                  placeholder="Photo URL" 
                  className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                  Add Teacher
                </button>
              </form>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Existing Teachers</h3>
              <div className="space-y-3">
                {teachers.map((t) => (
                  <div key={t.id} className="flex items-center justify-between p-3 border rounded-lg dark:border-zinc-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                         {t.photoUrl ? <img src={t.photoUrl} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-blue-500" />}
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                    <button onClick={() => handleDelete("teachers", t.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                 {teachers.length === 0 && <p className="text-gray-500">No teachers found.</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
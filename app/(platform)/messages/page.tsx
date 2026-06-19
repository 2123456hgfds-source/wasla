"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";

interface Contact {
  id: string;
  name: string;
  role: "support" | "instructor";
  roleLabel: string;
  avatarLetter: string;
  isOnline: boolean;
}

interface Message {
  id: number;
  sender: "user" | "other";
  text: string;
  time: string;
}

export default function MessagesPage() {
  // 1. قائمة الدعم والمدربين المتاحين للتواصل
  const contacts: Contact[] = [
    { id: "sup-1", name: "الدعم الفني والمساندة", role: "support", roleLabel: "فريق الدعم", avatarLetter: "🛠️", isOnline: true },
    { id: "inst-1", name: "المدرب قيس ربابعة", role: "instructor", roleLabel: "مدرب برمجيات", avatarLetter: "👨‍💻", isOnline: true },
    { id: "inst-2", name: "المدرب خالد المطيري", role: "instructor", roleLabel: "مدرب شبكات", avatarLetter: "👨‍🏫", isOnline: false },
  ];

  // 2. رسائل افتراضية لكل جهة اتصال
  const initialMessages: Record<string, Message[]> = {
    "sup-1": [
      { id: 1, sender: "other", text: "مرحباً بك في مركز الدعم الفني لمنصة وصلة. كيف يمكننا مساعدتك اليوم؟", time: "9:30 م" }
    ],
    "inst-1": [
      { id: 1, sender: "other", text: "أهلاً بك يا بطل! اطلعت على مشروعك في كورس النمذجة والمحاكاة وهو ممتاز جداً.", time: "8:15 م" },
      { id: 2, sender: "user", text: "شكراً جزيلاً يا دكتور، واجهتني مشكلة بسيطة فقط في الـ RLS وحللتها بفضل الله.", time: "8:20 م" },
      { id: 3, sender: "other", text: "رائع جداً! إذا احتجت أي مساعدة في ربط قاعدة البيانات أنا موجود دائماً.", time: "8:22 م" }
    ],
    "inst-2": [
      { id: 1, sender: "other", text: "السلام عليكم، تذكير بموعد المحاضرة القادمة غداً إن شاء الله.", time: "أمس" }
    ]
  };

  const [activeContact, setActiveContact] = useState<Contact>(contacts[0]);
  const [conversations, setConversations] = useState<Record<string, Message[]>>(initialMessages);
  const [typedMessage, setTypedMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const currentTime = new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" });
    
    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: typedMessage,
      time: currentTime
    };

    setConversations(prev => ({
      ...prev,
      [activeContact.id]: [...(prev[activeContact.id] || []), newMessage]
    }));

    setTypedMessage("");

    setTimeout(() => {
      const autoReply: Message = {
        id: Date.now() + 1,
        sender: "other",
        text: `شكراً لتواصلك معي، تم استلام رسالتك: "${typedMessage}". سأقوم بالرد عليك بالتفصيل خلال دقائق!`,
        time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" })
      };
      setConversations(prev => ({
        ...prev,
        [activeContact.id]: [...(prev[activeContact.id] || []), autoReply]
      }));
    }, 2000);
  };

  return (
    <div className="space-y-6 p-6">
      {/* تم إزالة كلمة (المرحلة 8) بنجاح هنا لتصبح واجهة رسمية احترافية */}
      <PageHeader 
        title="الالرسائل والدعم" 
        description="تواصل مباشرة مع المدربين الأكاديميين وفريق الدعم الفني لحل مشكلاتك" 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl rounded-2xl border border-border bg-card shadow-sm h-[550px] overflow-hidden text-right">
        
        {/* العمود الأيمن: قائمة المدربين والدعم */}
        <div className="md:col-span-1 border-l border-border flex flex-col bg-muted/10">
          <div className="p-4 border-b border-border font-bold text-heading text-sm bg-muted/30">
            جهات الاتصال المتاحة
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-border/50">
            {contacts.map((contact) => {
              const isSelected = activeContact.id === contact.id;
              return (
                <button
                  key={contact.id}
                  onClick={() => setActiveContact(contact)}
                  className={`w-full p-4 flex items-center gap-3 transition-colors text-right ${
                    isSelected ? "bg-primary-soft text-primary" : "hover:bg-muted/40"
                  }`}
                >
                  <div className="relative h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center text-xl shrink-0">
                    {contact.avatarLetter}
                    {contact.isOnline && (
                      <span className="absolute bottom-0 end-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-card" />
                    )}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <h4 className="font-bold text-sm truncate text-foreground">{contact.name}</h4>
                    <span className={`inline-block text-[10px] px-2 py-0.5 mt-0.5 rounded-full font-medium ${
                      contact.role === "support" ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"
                    }`}>
                      {contact.roleLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* العمود الأيسر: صندوق المحادثة والرسائل */}
        <div className="md:col-span-2 flex flex-col h-full bg-background/50">
          {/* رأس المحادثة */}
          <div className="p-4 border-b border-border bg-card flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-lg">
              {activeContact.avatarLetter}
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground">{activeContact.name}</h3>
              <p className="text-[10px] text-muted-foreground">
                {activeContact.isOnline ? "نشط حالياً" : "غير متصل"}
              </p>
            </div>
          </div>

          {/* منطقة عرض الرسائل */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
            {(conversations[activeContact.id] || []).map((msg) => {
              const isMe = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[75%] space-y-0.5 ${
                    isMe ? "ms-auto items-start" : "me-auto items-end"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm antialiased ${
                      isMe
                        ? "bg-primary text-primary-foreground rounded-br-none text-right"
                        : "bg-card border border-border text-foreground rounded-bl-none text-right"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-muted-foreground px-1">{msg.time}</span>
                </div>
              );
            })}
          </div>

          {/* صندوق إدخال وإرسال الرسائل */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-border bg-card flex gap-2 shrink-0">
            <input
              type="text"
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              placeholder={`اكتب رسالتك إلى ${activeContact.name}...`}
              className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 text-right"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition shrink-0"
            >
              إرسال
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
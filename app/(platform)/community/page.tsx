import { PageHeader } from "@/components/layout/page-header";
import { supabase } from "@/lib/supabase";

export default async function CommunityPage() {
  // جلب المنشورات من جدول posts
  const { data: posts, error } = await supabase
    .from("posts")
    .select(`
      id,
      content,
      created_at,
      user_id
    `)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <PageHeader 
        title="المجتمع" 
        description="شارك أفكارك وتفاعل مع أعضاء مجتمع وصلة" 
      />

      <div className="space-y-4 max-w-2xl">
        {error && (
          <p className="text-red-500 text-sm">حدث خطأ أثناء جلب المنشورات.</p>
        )}

        {!posts || posts.length === 0 ? (
          <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
            لا توجد منشورات حالياً. كن أول من ينشر!
          </div>
        ) : (
          posts.map((post) => (
            <div 
              key={post.id} 
              className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  ع
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">عضو مجتمع وصلة</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.created_at).toLocaleDateString("ar-EG")}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
import { PageHeader } from "@/components/layout/page-header";
import { EmptyState } from "@/components/ui/empty-state";

export default function AdminPage() {
  return (
    <div>
      <PageHeader title="لوحة الإدارة" description="إدارة المجتمع والمحتوى والصلاحيات" />
      <EmptyState
        title="لوحة الإدارة قادمة في المرحلة 8"
        description="ستضم إدارة الأعضاء، الكورسات، المنشورات، الأحداث، التقارير، والصلاحيات."
      />
    </div>
  );
}

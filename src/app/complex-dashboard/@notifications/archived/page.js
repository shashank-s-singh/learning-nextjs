import Card from "@/app/component/card";
import Link from "next/link";

export default function ArchivedNotification() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div className="ml-4">
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}

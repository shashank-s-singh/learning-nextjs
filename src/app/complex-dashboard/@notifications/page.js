import Card from "@/app/component/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Notifications</div>
      <div className="ml-4">
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}

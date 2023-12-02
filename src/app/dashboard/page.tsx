import { Dropzone } from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";

export default function Dashboard() {
  const { userId } = auth();
  return (
    <div>
      <Dropzone />
    </div>
  );
}

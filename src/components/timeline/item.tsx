import LiIcon from "@/components/liIcon";

interface TimelineItemProps {
  children: React.ReactNode;
  imageSrc: string;
}

export default function TimelineItem({ children, imageSrc }: TimelineItemProps) {
  return (
    <li className="grid grid-cols-[64px_1fr] items-start">

      {/* icon column */}
      <div className="relative flex justify-center">
        <LiIcon imageSrc={imageSrc} />
      </div>

      {/* card column */}
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
        {children}
      </div>

    </li>
  );
}

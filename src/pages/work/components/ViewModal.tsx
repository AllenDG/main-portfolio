import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import Dormitory from "@/assets/images/Dormitory.jpg";

interface ViewModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  techStack: string[];
  story: string;
  image?: string;
}

export default function ViewModal({
  open,
  onClose,
  title,
  description,
  techStack,
  story,
  image,
}: ViewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[1000px] h-[600px] bg-background border-none shadow-2xl p-0">
        <div className="col-span-1 lg:col-span-3 border-r dark:border-neutral-800 p-6 overflow-y-auto">
          <div className="col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800 p-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
                {title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div>
                <h4 className="text-base font-medium text-muted-foreground mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium text-muted-foreground mb-2">
                  Story
                </h4>
                <p className="text-base text-foreground leading-normal">
                  {story}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4 p-8 relative bg-white dark:bg-neutral-900">
            {image && (
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full h-full overflow-hidden rounded-md shadow-xl"
              >
                <img
                  src={Dormitory}
                  alt={title}
                  width={1600}
                  height={900}
                  className="w-full h-[100%] object-cover object-center rounded-md"
                />
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

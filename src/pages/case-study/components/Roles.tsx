// Role.tsx
export default function Role({ role }: { role: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-2">Role</h3>
      <p className="text-muted-foreground capitalize">
        {role === "uiux" ? "UI/UX Designer" : "Web Developer"}
      </p>
    </div>
  );
}

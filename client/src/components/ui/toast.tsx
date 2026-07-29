interface Toast {
  title: string;
  message?: string | null;
  type: "success" | "error" | "warning";
}

export function Toast({ title, message = null, type }: Toast) {
  return (
    <div className="flex gap-2">
      <p>{title}</p>
      {message && <p>{message}</p>}
    </div>
  );
}

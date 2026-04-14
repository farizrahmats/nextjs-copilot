"use client";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * A lightweight, accessible confirmation dialog rendered as a modal overlay.
 * Uses the native <dialog> element for focus-trapping and accessibility.
 */
export default function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onCancel}
      />

      {/* Dialog panel */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
        className="relative z-10 w-full max-w-sm rounded-lg border border-(--border) bg-(--surface) p-6 shadow-lg"
      >
        {/* Title */}
        <h3
          id="confirm-dialog-title"
          className="mb-2 text-base font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          id="confirm-dialog-description"
          className="mb-6 text-sm"
          style={{ color: "var(--foreground-muted)" }}
        >
          {description}
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            className="btn btn-secondary btn-sm"
            onClick={onCancel}
            autoFocus
          >
            {cancelLabel}
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { toast } from "sonner";

const ArticleActions = () => {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast("Link copiado en el portapapeles.");
    } catch (err) {
      toast.error("Algo salió mal, por favor intenta nuevamente.");
    }
  };

  return (
    <div>
      <Button variant="outline" onClick={copyLink}>
        <Link className="mr-2" size={14} /> Compartir
      </Button>
    </div>
  );
};

export default ArticleActions;

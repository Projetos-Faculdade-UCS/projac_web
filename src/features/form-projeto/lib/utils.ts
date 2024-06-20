import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function dateToBrDate(date: Date) {
    return format(date, "PPP", {locale: ptBR})
}
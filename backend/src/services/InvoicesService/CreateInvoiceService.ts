import AppError from "../../errors/AppError";
import Invoice from "../../models/Invoices";

interface InvoiceData {
  detail: string;
  status: string;
  value: number;
  dueDate: string;
  companyId: number;
}

const CreateInvoiceService = async (invoiceData: InvoiceData): Promise<Invoice> => {
  const invoice = await Invoice.create(invoiceData);
  return invoice;
};

export default CreateInvoiceService;

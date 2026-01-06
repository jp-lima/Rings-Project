import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAuthData } from "../utils/dadosuser";
export default function Vendas() {
  const [produtos, setProdutos] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const url = import.meta.env.VITE_API_URL;
  const authData = getAuthData();
  const [inputCode, setInputCode] = useState(false)
  const [code, setCode] = useState("");
  const [saleID, setSaleID] = useState("");  
  const [isLoading, setIsLoading] = useState(false);
const statusColors = {
  "aguardando pagamento": "#FACC15",
  "pagamento confirmado": "#86EFAC",
  "em produção": "#BFDBFE",
  "a caminho": "#C4B5FD",
  "entregue": "#22C55E",
};

  /* RESPONSIVO */
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const handler = () => setIsMobile(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

const btnEdit = {
  background: "#C9A86A",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  marginRight: "10px",
  borderRadius: "6px",
  cursor: "pointer",
};


  useEffect(() => {
    async function carregarDados() {
      try {
        const resSales = await fetch(`${url}/sales/`);
        const resProducts = await fetch(`${url}/products`);


        const salesRaw = await resSales.json();
        const productsRaw = await resProducts.json();

        const salesArray = Array.isArray(salesRaw) ? salesRaw : salesRaw.data || [];
        const productsArray = Array.isArray(productsRaw) ? productsRaw : productsRaw.data || [];

        const productsMap = new Map(
          productsArray.map(p => [String(p.id), p])
        );

        const completos = salesArray
          .filter(sale => sale.status !== "cart")
          .map(sale => {
            const produto = productsMap.get(String(sale.product_id));
            return {
              key: sale.id,
              id: sale.id,
              sizes: sale.sizes.split("/")[0],
              gravacoes: sale.sizes.split("/")[1],
              name: produto?.name || "Produto não encontrado",
              price: sale.value || 0,
              amount: sale.amount, 
              code:sale.code,
              user_cep:sale.user_cep,
              address:`${sale.state},${sale.city},${sale.neighboor},${sale.street}`,
              complement: sale.complement,
              status: sale.status
            };
          });

        setProdutos(completos);
      } catch {
        setProdutos([]);
      }
    }

    carregarDados();
  }, [url]);

  






  return (
    <div style={{ padding: isMobile ? "10px" : "20px" }}>
      <h2 style={{ fontSize: isMobile ? "20px" : "26px", color: "#C9A86A" }}>
        Gerenciar Vendas
      </h2>

      <div style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}>


        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F9F5EE" }}>
              <th style={thStyle}>Produto</th>
              <th style={thStyle}>Preço</th>
              <th style={thStyle}>medidas</th>
              <th style={thStyle}>Gravações</th>
              <th style={thStyle}>Status da venda</th>
              <th style={thStyle}> Código de rastreio </th> 
              <th style={thStyle}>CEP cliente</th>
              <th style={thStyle}>Endereço</th>
              <th style={thStyle}>Complemento do endereço</th>
              <th style={thStyle}>Ações</th>
          </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.key}>
                <td style={tdStyle}>{produto.name}</td>
              <td style={tdStyle}>
                {Number(produto.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>{produto.sizes}</td>
              <td>{produto.gravacoes}</td>
              <td style={tdStyle}> <div  style={{
    backgroundColor: statusColors[produto.status] || "#E5E7EB",
    padding: "6px 10px",
    borderRadius: "6px",
    fontWeight: "500",
    textAlign: "center",
  }}className={"status_venda"}>  {produto.status} </div></td>
                <td style={tdStyle} onClick={() => {setInputCode(true); setCode(produto.code); setSaleID(produto.key)}}>
              {produto.code }  
              </td>
                <td style={tdStyle}>{produto.user_cep}</td>
                <td style={tdStyle}>{produto.address}</td>
                <td style={tdStyle}>{produto.complement}</td>
              <td style={tdStyle}>
                  <Link to={`/admin/vendas/editar/${produto.id}`}>
                    <button  style={btnEdit} >Editar </button>
                  </Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


const box = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  marginBottom: "20px",
};

const th = {
  padding: "12px",
  borderBottom: "2px solid #eee",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const card = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const btnEdit = {
  background: "#C9A86A",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
};

const btnDel = {
  background: "#d9534f",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
};

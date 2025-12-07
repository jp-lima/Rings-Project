import { useEffect } from "react";

export default function Checkout() {
  useEffect(() => {
    document.querySelectorAll(".set-bg").forEach((el) => {
      const bg = el.getAttribute("data-setbg");
      if (bg) el.style.backgroundImage = `url(${bg})`;
    });
  }, []);

  return (
    <div>
      {/* Checkout Section */}
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <h4>Detalhes de Cobrança</h4>
            <form>
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Nome<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Sobrenome<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div className="checkout__input">
                    <p>
                      País<span>*</span>
                    </p>
                    <input type="text" />
                  </div>

                  <div className="checkout__input">
                    <p>
                      Endereço<span>*</span>
                    </p>
                    <input type="text" placeholder="Rua e número" className="checkout__input__add" />
                    <input
                      type="text"
                      placeholder="Apartamento, suíte, unidade etc (opcional)"
                    />
                  </div>

                  <div className="checkout__input">
                    <p>
                      Cidade<span>*</span>
                    </p>
                    <input type="text" />
                  </div>

                  <div className="checkout__input">
                    <p>
                      Estado<span>*</span>
                    </p>
                    <input type="text" />
                  </div>

                  <div className="checkout__input">
                    <p>
                      CEP<span>*</span>
                    </p>
                    <input type="text" />
                  </div>

                  <div className="checkout__input">
                    <p>
                      Telefone<span>*</span>
                    </p>
                    <input type="text" />
                  </div>

                  <div className="checkout__input">
                    <p>
                      E-mail<span>*</span>
                    </p>
                    <input type="text" />
                  </div>

                  <div className="checkout__input__checkbox">
                    <label htmlFor="acc">
                      Criar uma conta?
                      <input type="checkbox" id="acc" />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <p>Crie uma conta preenchendo as informações abaixo.</p>

                  <div className="checkout__input">
                    <p>
                      Senha da Conta<span>*</span>
                    </p>
                    <input type="text" />
                  </div>

                  <div className="checkout__input__checkbox">
                    <label htmlFor="diff-acc">
                      Enviar para um endereço diferente?
                      <input type="checkbox" id="diff-acc" />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <div className="checkout__input">
                    <p>Observações do Pedido</p>
                    <input
                      type="text"
                      placeholder="Notas sobre seu pedido, como instruções especiais de entrega."
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4>Seu Pedido</h4>
                    <div className="checkout__order__products">
                      Produtos <span>Total</span>
                    </div>

                    <ul>
                      <li>
                        Pacote de Vegetais <span>$75.99</span>
                      </li>
                      <li>
                        Vegetais Frescos <span>$151.99</span>
                      </li>
                      <li>
                        Bananas Orgânicas <span>$53.99</span>
                      </li>
                    </ul>

                    <div className="checkout__order__subtotal">
                      Subtotal <span>$750.99</span>
                    </div>

                    <div className="checkout__order__total">
                      Total <span>$750.99</span>
                    </div>

                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Pagamento por Cheque
                        <input type="checkbox" id="payment" />
                        <span className="checkmark"></span>
                      </label>
                    </div>

                    <div className="checkout__input__checkbox">
                      <label htmlFor="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark"></span>
                      </label>
                    </div>

                    <button type="submit" className="site-btn">
                      FINALIZAR PEDIDO
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

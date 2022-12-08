import React from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Header() {
  return (
    <div className="custom_div">
      <div className="container">
        <header className="py-2 bg-white br_header p-3">
          <div className="container justify-content-between d-flex">
            <div className="d-flex align-items-center gap-5">
              <div className="">
                <img src="/logo.png"></img>
              </div>
              <div className="">
                <nav>
                  <ul className="d-flex gap-4 m-0">
                    <li>
                      <a className="text-decoration-none text-dark">
                        Чему вы научитесь
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none text-dark">
                        Процесс обучения
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none text-dark">
                        Стоимость
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none text-dark">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="d-flex ml_div gap-3">
                <button className="btn btn_registration">
                  <a className="text-decoration-none text-dark">Регистрация</a>
                </button>
                <button className="btn btn-primary btn_signup">
                  <a className="text-decoration-none text-white">
                    <AiOutlineArrowRight /> Войти
                  </a>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

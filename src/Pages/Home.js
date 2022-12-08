import React from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import Course from "../components/Home/Course";

export default function Home() {
  return (
    <div>
      <div className="custom_div">
        <section className="py-5 container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="py-3">
                  <h1 className="border-bottom py-3">
                    Школа <span className="orange_span">[</span>
                    <b className="">
                      <span className="italic_span">программирования</span>
                    </b>
                    <span className="orange_span">]</span> для тех, кому нужны
                    реальные навыки, а не просто сертификат
                  </h1>
                  <p>
                    Пройдите тестирование, чтобы получить доступ <br></br> к
                    бесплатным вводным урокам
                  </p>
                  <button className="btn orange_btn p-3">
                    <a className="text-decoration-none text-white">
                      Пройти тестирование <BsArrowUpRight />
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 px-5">
                <div className="ml_div">
                  <img src="/computer.png" className="img-fluid"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center justify-content-end">
        <button className="btn down_btn">
          <AiOutlineArrowDown />
        </button>
      </div>
      <section className="py-5">
        <div className="container text-center">
          <h1>
            <b>Какие технологии вы изучите:</b>
          </h1>
          <div className="row custom_div br_div">
            <div className="col-12 col-md-6 col-sm-3">
              <div className="py-5">
                <img src="/man_computer.png"></img>
              </div>
            </div>
            <div className="col-12 col-md-6 col-sm-3">
              <div className="py-5">
                <button className="btn lb_btn p-3">
                  <a className="text-white text-decoration-none fs-5">
                    Язык программирования Python
                  </a>
                </button>
                <button className="btn lo_btn p-3">
                  <a className="text-white text-decoration-none fs-5">Сети</a>
                </button>
                <button className="btn lr_btn p-3">
                  <a className="text-white text-decoration-none fs-5">
                    Базы данных
                  </a>
                </button>
                <button className="btn lg_btn p-3">
                  <a className="text-white text-decoration-none fs-5">
                    Фреймворки Flask и Django
                  </a>
                </button>
                <button className="btn vlb_btn p-3">
                  <a className="text-white text-decoration-none fs-5">
                    Отладка и тестирование
                  </a>
                </button>
                <button className="btn db_btn p-3">
                  <a className="text-white text-decoration-none fs-5">Docker</a>
                </button>
                <button className="btn lp_btn p-3">
                  <a className="text-white text-decoration-none fs-5">Git</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Course />
    </div>
  );
}

import React from "react";
import EbookGirl from "../../assets/images/EbookGirl.png";

const EbookSection = () => {
	return (
		<React.Fragment>
			<section className="h-ebook flex flex-row bg-projectBlue/10">
				<div className="flex flex-col justify-center items-center flex-1 h-full p-10">
					<h1 className="font-bold text-2xl md:text-2xl text-projectBlue leading-relaxed">
						Acesse, crie usuários, cadastre livros e empreste
						livros, tudo isso utilizando o localStorage para dar a
						impressão de persistência
					</h1>
					<p className="leading-loose text-projectBlue text-lg font-thin">
						Este sistema busca implementar e explorar conceitos
						aprendidos no módulo de orientação a objetos, sendo
						assim, não existe necessidade da criação de um módulo de
						persistência com o banco de dados. Brinque e aproveite o
						sistema. Revise o código caso haja alguma dúvida de como
						funciona!
					</p>
					<div className="flex flex-row justify-center mt-10 w-11/12">
						<input
							type="text"
							className="p-5 rounded-l bg-white w-11/12 "
							placeholder="Cadastre um usuário!"
						/>
                        <button className="bg-red-500 hover:bg-red-600 active:bg-red-800 rounded-r p-4 text-white">Cadastrar</button>
					</div>
				</div>
				<div className="hidden md:flex-1 lg:flex justify-center items-center">
					<img src={EbookGirl} alt="" />
				</div>
			</section>
		</React.Fragment>
	);
};

export default EbookSection;

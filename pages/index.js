import Image from "next/image";

import Layout from "@components/Layout";
import Header from "@components/Header";

import { delights } from "@lib/delights";

export default function Home() {
	return (
		<Layout title="Fleur Delights">
			<Header />

			<hr />

			{/* current menus */}
			<section className="py-24 bg-gray-50">
				<div className="w-5/6 mx-auto">
					<h3 className="text-7xl font-black tracking-wide underline text-blueGray-700">
						Available Delights
					</h3>

					<div className="grid grid-cols-3 gap-12 mt-10">
						{delights.map((item) => (
							<div
								className="flex flex-col p-8 text-center shadow-lg border bg-white relative"
								key={delights.indexOf(item)}
							>
								{item.isBestSeller ? (
									<span className="absolute bg-red-400 text-white py-2 px-4 text-xl -m-10 uppercase font-bold">
										Best Seller
									</span>
								) : null}
								<Image
									src={`/delights/${item.image}`}
									height={300}
									width={300}
									objectFit="cover"
								/>
								<h4 className="text-3xl font-black tracking-wide text-blueGray-600">
									{item.name}
								</h4>

								<ul className="w-5/6 mx-auto flex flex-col mt-4">
									{item.prices.map((price) => (
										<li key={item.prices.indexOf(price)}>
											<a
												href="#"
												type="button"
												className="py-3 my-1 bg-blueGray-500 hover:bg-blueGray-700 text-gray-100 w-full text-xl font-bold"
											>
												{price.deal}{" "}
												<span className="font-black">
													(Php {price.price})
												</span>
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}

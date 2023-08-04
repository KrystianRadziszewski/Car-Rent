import { CustomFilter, SearchBar, Hero, CarCard } from '@/components';
import { fuels, manufacturers, yearsOfProduction } from '@/constants';
import { FilterProps, fetchCars } from '@/utils';
import { useState, useEffect } from 'react';

interface homeProps {
	searchParams: FilterProps;
}

// export default function Home({ searchParams }: homeProps) {
export default function Home({}) {
	const [allCars, setAllCars] = useState<[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const carsData = await fetchCars();
				// const carsData = await fetchCars({
				// 	manufacturer: searchParams.manufacturer || '',
				// 	year: searchParams.year || 2023,
				// 	fuel: searchParams.fuel || '',
				// 	limit: searchParams.limit || 10,
				// 	model: searchParams.model || '',
				// });
				setAllCars(carsData);
			} catch (error) {
				console.error('Someone went wrong... (coś nie tak)', error);
			}
		};
		fetchData();
	}, []);
	console.log(allCars);

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className=" overflow-hidden">
			<Hero />

			<div id="discover" className=" mt-12 padding-x padding-y max-width">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>

				<div className="home__filters">
					<SearchBar />

					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars?.map((car) => (
								<CarCard car={car} />
							))}
						</div>
					</section>
				) : (
					<div className="home__error-container">
						<h2 className="text-black text-xl font-bold">Oops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}

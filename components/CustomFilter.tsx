import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

export interface OptionProps {
	title: string;
	value: string;
}
export interface CustomFilterProps {
	title: string;
	options: OptionProps[];
}

const CustomFilter = ({ title, options }: CustomFilterProps) => {
	return (
		<div className="w-fit">
			<Listbox>
				<div className=" relative w-fit z-10">
					<Listbox.Button className=" custom-bilter__btn">
						<span>Filter</span>
					</Listbox.Button>
				</div>
			</Listbox>
		</div>
	);
};

export default CustomFilter;

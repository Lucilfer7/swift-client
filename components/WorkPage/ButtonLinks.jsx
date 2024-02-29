import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const people = [
    { name: 'Edit information' },
    { name: 'Link Authors' },
    { name: 'Delete' },
];

const ButtonLinks = () => {
    const [selected, setSelected] = useState(people[0])

    return (
        <div className="">
            <Listbox value={selected} onChange={setSelected}>
                <Listbox.Button>{selected.name}</Listbox.Button>
                <Listbox.Options>
                    {people.map((person) => (
                        <Listbox.Option
                            key={person.id}
                            value={person}
                        >
                            {person.name}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}

export default ButtonLinks;
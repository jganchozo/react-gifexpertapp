import React from 'react';
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

    const category = 'Crazy';

    test('Debe devolver el compoenente <GifGrid /> ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();

    });
    
    test('should show items when images are loaded useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost.com/cosa.jpg',
            title:'anything',
        },
        {
            id: 'ABD',
            url: 'https://localhost.com/cosa.jpg',
            title:'anything',
        }
    ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>)

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
    
})

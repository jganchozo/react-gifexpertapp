import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente GifGridItem', () => {

    const title = 'Hunter'; 
    const url = `https://media3.giphy.com/media/78ny3pDP74gDu/giphy-downsized-medium.gif?cid=395e9295xsekawpgzpc7nhl1lzm7dh4egqsp9pvhzat696eh&rid=giphy-downsized-medium.gif&ct=g`;
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('deberia devolver el componente <GifGridItem /> ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener un parrafo con el texto', () => {
    
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('deberia tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');

        //expect(div.props().className).toContain('animate__fadeIn');
        expect(div.props().className.includes('animate__fadeIn')).toBe(true)
        
    })
    
    
})

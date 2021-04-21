import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el customHook useFetchGifs', () => {
    
    const category = 'One Punch';

    test('should retornar el estado inicial', async () => {
        
        //const { data, loading } = useFetchGifs( category );

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( category ));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
       
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( category ));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);

    });
    
    
})

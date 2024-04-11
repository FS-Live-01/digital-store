import { useQuery, useMutation } from "@tanstack/react-query";
import { API, queryClient } from "../services";

export const useBuscarCategorias = () => {
  return useQuery({
    queryKey: ['cachorro'],
    queryFn: async () => {
      const request = await API.get('categorias');      
      return request.data;
    }
  });
}

export const useCriarCategoria = () => {
  return useMutation({
    mutationFn: async (data) => {
      const request = await API.post('categorias', data);
      return request.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: 'cachorro'
      });
    }
  });
}
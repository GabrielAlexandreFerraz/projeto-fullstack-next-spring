import { useState } from 'react'
import { Layout } from 'components'

export const CadastroProdutos: React.FC = () => {
    
    const [sku, setSku] = useState('')
    const [preco, setPreco] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    
    const submit = ()=>{
        const produto = {
            sku, 
            preco, 
            nome, 
            descricao
        }
    }

    return(

        <Layout titulo='Produtos'>

            <div className='columns'>
           <div className='field is-half column'>
            <label className='label' htmlFor='inputSku'>SKU *</label>
            <div className='control'>
            <input className='input' 
            id='inputSku' value={sku} onChange={e =>setSku(e.target.value)}
            placeholder='Digite o SKU do Produto'/>
            </div>
           </div>
           

           <div className='field is-half column'>
            <label className='label' htmlFor='inputPreco'>Preço *</label>
            <div className='control'>
            <input className='input' 
            id='inputPreco' value={preco} onChange={e =>setPreco(e.target.value)}
            placeholder='Digite o Preço do Produto'/>
            </div>
           </div>
           </div>


           <div className='columns'>
           <div className='field column is-full'>
            <label className='label' htmlFor='inputNome'>Nome do Produto*</label>
            <div className='control'>
            <input className='input' 
            id='inputNome' value={nome} onChange={e =>setNome(e.target.value)}
            placeholder='Digite o Nome do Produto'/>
            </div>
           </div>
           </div>


           <div className='columns'>
           <div className='field column is-full'>
            <label className='label' htmlFor='inputDesc'>Descrição: *</label>
            <div className='control'>
            <textarea className='textarea' 
            id='inputDesc' value={descricao} onChange={e =>setDescricao(e.target.value)}
            placeholder='Digite descrição detalhada do Produto'/>
            </div>
           </div>
           </div>


            <div className="field is-grouped">
            <div className="control">
            <button onClick={submit} className="button is-link">Salvar</button>
            </div>
            <div className="control">
            <button className="button is-link is-light">Voltar</button>
            </div>
            </div>


        </Layout>

    )
}
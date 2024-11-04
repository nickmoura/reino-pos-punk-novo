import { useState } from 'react';
import axios from 'axios';
import { aplicarMascaraTelefone } from '../assets/Mascara'; // Corrija o nome do arquivo se necessário

const Concorra = () => {
    const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', banda: '', cidade_do_show: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Aplica a máscara apenas para o campo telefone
        if (name === 'telefone') {
            setFormData({ ...formData, [name]: aplicarMascaraTelefone(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/participar', formData);
            alert('Dados enviados com sucesso!');
            setFormData({ nome: '', email: '', telefone: '', banda: '', cidade_do_show: '' });
        } catch (error) {
            alert('Erro ao enviar os dados.');
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Concorra a um ingresso!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input type="tel" className="form-control" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="banda" className="form-label">Banda Favorita</label>
                    <input type="text" className="form-control" id="banda" name="banda" value={formData.banda} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cidade_do_show" className="form-label">Cidade do Show</label>
                    <input type="text" className="form-control" id="cidade_do_show" name="cidade_do_show" value={formData.cidade_do_show} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default Concorra;

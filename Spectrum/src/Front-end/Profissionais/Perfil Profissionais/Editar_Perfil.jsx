import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Editar_Perfil.css';
import { auth, db, storage, ref, uploadBytes, getDownloadURL } from '../../Firebase/Firebase';
import { doc, setDoc } from 'firebase/firestore';
import { AlertTriangle, CheckCircle } from 'lucide-react';

function Editar_Perfil() {
  const [imagemPreview, setImagemPreview] = useState(null);
  const [imagemArquivo, setImagemArquivo] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    profissao: '',
    email: '',
    telefone: '',
    senha: '',
    descricao: ''
  });
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const navigate = useNavigate();

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagemPreview(URL.createObjectURL(file));
      setImagemArquivo(file);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErros(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validarCampos = () => {
    const novosErros = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        novosErros[key] = 'Este campo é obrigatório.';
      }
    });
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSalvar = async () => {
    if (!validarCampos()) return;

    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Usuário não autenticado");

      let fotoURL = '';
      if (imagemArquivo) {
        const storageRef = ref(storage, `profissionais/${user.uid}`);
        await uploadBytes(storageRef, imagemArquivo);
        fotoURL = await getDownloadURL(storageRef);
      }

      await setDoc(doc(db, 'profissionais', user.uid), {
        ...formData,
        uid: user.uid,
        fotoURL: fotoURL || null
      });

      setSucesso(true);
      setTimeout(() => {
        setSucesso(false);
        navigate('/perfilprofissionais');
      }, 2000);
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  return (
    <div className="editar-container">
      <div className="navbar-editar">
        <img src="/logo_Spectrum_sem_fundo.png" alt="Logo" className="logo-navbar" />
        <h2 className="titulo-editar">Perfil do Profissional</h2>
        <Link to="/telainicialprofissionais" className="botao-voltar">VOLTAR</Link>
      </div>

      {sucesso && (
        <div className="popup-sucesso">
          <CheckCircle size={24} color="#0f5132" style={{ marginRight: '10px' }} />
          <span>Informações salvas com sucesso!</span>
        </div>
      )}

      <div className="editar-conteudo">
        <div className="editar-corpo">
          <form className="editar-form">
            {[
              { label: 'Nome', name: 'nome' },
              { label: 'Profissão', name: 'profissao' },
              { label: 'Email', name: 'email' },
              { label: 'Telefone', name: 'telefone' },
              { label: 'Senha', name: 'senha' }
            ].map(({ label, name }, index) => (
              <div className="editar-campo" key={index}>
                <label>{label}:</label>
                <input
                  name={name}
                  type={name === 'senha' ? 'password' : 'text'}
                  value={formData[name]}
                  onChange={handleChange}
                  className={erros[name] ? 'erro' : ''}
                  placeholder={`Digite seu ${label.toLowerCase()}`}
                />
                {erros[name] && (
                  <div className="mensagem-erro">
                    <AlertTriangle size={16} style={{ marginRight: '6px' }} />
                    Preencha o campo {label.toLowerCase()}
                  </div>
                )}
              </div>
            ))}
          </form>

          <div className="foto-editar-container">
            <label htmlFor="upload-foto">
              <img
                src={imagemPreview || '/Sideli-Cardoso.png'}
                alt="Foto"
                className="foto-editar-preview"
              />
            </label>
            <input
              type="file"
              id="upload-foto"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleImagemChange}
            />

            <div className="caixa-descricao-editar">
              <p>Breve Descrição Profissional</p>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                className={erros.descricao ? 'erro' : ''}
                placeholder="Digite uma breve descrição aqui..."
              />
              {erros.descricao && (
                <div className="mensagem-erro">
                  <AlertTriangle size={16} style={{ marginRight: '6px' }} />
                  Preencha a descrição
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="botoes-editar">
          <button type="button" className="botao-editar" onClick={handleSalvar}>
            Salvar
          </button>
          <Link to="/perfilprofissionais" className="botao-editar">Ver seu perfil</Link>
        </div>
      </div>
    </div>
  );
}

export default Editar_Perfil;

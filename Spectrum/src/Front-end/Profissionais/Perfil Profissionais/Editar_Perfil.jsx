import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Editar_Perfil.css';
import { auth, db, storage } from '../../Firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function Editar_Perfil() {
  const navigate = useNavigate();
  const [imagemPreview, setImagemPreview] = useState(null);
  const [imagemFile, setImagemFile] = useState(null);
  const [uid, setUid] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    nome: '',
    profissao: '',
    email: '',
    telefone: '',
    senha: '',
    descricao: ''
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUid(user.uid);
    });
    return () => unsubscribe();
  }, []);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagemFile(file);
      setImagemPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validarCampos = () => {
    const novosErros = {};
    Object.entries(form).forEach(([campo, valor]) => {
      if (!valor.trim()) {
        novosErros[campo] = 'Este campo é obrigatório';
      }
    });
    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSalvar = async () => {
    if (!validarCampos()) return;

    try {
      let fotoURL = null;

      if (imagemFile) {
        const storageRef = ref(storage, `fotos/${uid}`);
        await uploadBytes(storageRef, imagemFile);
        fotoURL = await getDownloadURL(storageRef);
      }

      const docRef = doc(db, 'profissionais', uid);
      await setDoc(docRef, {
        ...form,
        fotoURL: fotoURL || imagemPreview || ''
      });

      setShowSuccess(true);
      setTimeout(() => {
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

      <div className="editar-conteudo">
        <div className="editar-corpo">
          <form className="editar-form">
            {['nome', 'profissao', 'email', 'telefone', 'senha'].map((campo) => (
              <div className="editar-campo" key={campo}>
                <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                <input
                  type="text"
                  name={campo}
                  value={form[campo]}
                  onChange={handleChange}
                  placeholder={`Digite seu ${campo}`}
                />
                {errors[campo] && <span className="erro-campo">{errors[campo]}</span>}
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
                placeholder="Digite uma breve descrição aqui..."
                value={form.descricao}
                onChange={handleChange}
              />
              {errors.descricao && <span className="erro-campo">{errors.descricao}</span>}
            </div>
          </div>
        </div>

        <div className="botoes-editar">
          <button className="botao-editar" type="button" onClick={handleSalvar}>Salvar</button>
          <Link to="/perfilprofissionais" className="botao-editar">Ver seu perfil</Link>
        </div>
      </div>

      {showSuccess && (
        <div className="popup-sucesso">
          <p>✔ Informações salvas com sucesso!</p>
        </div>
      )}
    </div>
  );
}

export default Editar_Perfil;

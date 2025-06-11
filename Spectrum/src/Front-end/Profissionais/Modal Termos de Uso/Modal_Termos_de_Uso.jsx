import React from 'react';
import './Modal_Termos_de_Uso.css';

const Modal_Termos_de_Uso = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>📜 Termos de Uso</h2>
          <button className="close-button" onClick={onClose} title="Fechar">×</button>
        </div>
        <div className="modal-content">
          <p>
            Bem-vindo(a) ao Projeto Spectrum! Antes de utilizar nossa plataforma, leia com atenção os termos abaixo.
            Ao se cadastrar ou utilizar nossos serviços, você concorda com estas condições.
            <br /><br />
            <strong>1. OBJETIVO DA PLATAFORMA</strong><br />
            O Projeto Spectrum oferece um ambiente seguro, informativo e acolhedor para:<br />
            - Pessoas autistas (TEA);<br />
            - Familiares e responsáveis legais;<br />
            - Profissionais da saúde e educação;<br />
            - Público interessado em aprender sobre o TEA.
            <br /><br />
            <strong>2. ÁREAS DA PLATAFORMA</strong><br />
            Nosso sistema conta com as seguintes seções:<br />
            - Área de Pessoas TEA: login, cadastro, perfil e conteúdo direcionado.<br />
            - Área de Responsáveis: login, cadastro, perfil e conteúdo direcionado.<br />
            - Área de Profissionais: login, cadastro, perfil e ferramentas de apoio.<br />
            - Área de Interesse: formulário para pessoas interessadas.<br />
            - Chat: ferramenta de troca de mensagens entre usuários e profissionais.<br />
            - Estratégias: seção com materiais de apoio.<br />
            - Tela Inicial: apresentação do Projeto Spectrum.
            <br /><br />
            <strong>3. CADASTRO E RESPONSABILIDADES</strong><br />
            Ao se cadastrar, você se compromete a:<br />
            - Fornecer informações verídicas e atualizadas;<br />
            - Manter a confidencialidade de sua senha e dados de login;<br />
            - No caso de profissionais, garantir a veracidade das credenciais e formação informada.
            <br /><br />
            <strong>4. PRIVACIDADE E DADOS</strong><br />
            Seus dados são armazenados com segurança, respeitando a LGPD (Lei Geral de Proteção de Dados).<br />
            Os dados não serão compartilhados com terceiros sem seu consentimento, exceto quando exigido por lei.
            <br /><br />
            <strong>5. USO DO CHAT</strong><br />
            O chat é uma ferramenta de troca de informações, orientações e acolhimento.<br />
            Não substitui atendimento médico ou psicológico emergencial.<br />
            É vedado o uso do chat para:<br />
            - Conteúdo ofensivo, discriminatório ou inadequado;<br />
            - Divulgação de informações falsas;<br />
            - Qualquer prática que infrinja a legislação vigente.
            <br /><br />
            <strong>6. CONTEÚDO DA PLATAFORMA</strong><br />
            Todo conteúdo disponibilizado na plataforma é baseado em fontes confiáveis, como o DSM-5-TR, porém não substitui orientação médica, diagnóstica ou terapêutica formal.
            <br /><br />
            <strong>7. CONDUTA DOS USUÁRIOS</strong><br />
            Ao utilizar a plataforma, você concorda em:<br />
            - Respeitar todos os usuários, independentemente de suas diferenças;<br />
            - Não utilizar a plataforma para fins ilícitos;<br />
            - Reportar qualquer conduta inadequada à equipe de suporte.<br />
            A violação destas regras poderá resultar em suspensão ou exclusão do acesso.
            <br /><br />
            <strong>8. MODIFICAÇÕES E ATUALIZAÇÕES</strong><br />
            Os Termos de Uso podem ser atualizados a qualquer momento. Quando isso ocorrer, a nova versão será disponibilizada na plataforma e os usuários serão notificados.
            <br /><br />
            <strong>9. ACEITE DOS TERMOS</strong><br />
            Ao marcar “Li e aceito os Termos de Uso” no momento do cadastro, você declara estar ciente e de acordo com as condições aqui estabelecidas.<br />
            Em caso de dúvidas, entre em contato com nossa equipe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal_Termos_de_Uso;

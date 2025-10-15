const messages = {
  pt: {
    translations: {
      signup: {
        title: "Cadastro",
        toasts: {
          success: "Usuário criado com sucesso! Por favor, faça login.",
          fail: "Erro ao criar usuário. Verifique os dados informados.",
        },
        form: {
          name: "Nome",
          email: "E-mail",
          password: "Senha",
        },
        buttons: {
          submit: "Cadastrar",
          login: "Já tem uma conta? Faça login!",
        },
      },
      login: {
        title: "Fazer Login",
        form: {
          email: "E-mail",
          password: "Senha",
        },
        buttons: {
          submit: "Entrar",
          register: "Cadastre-se agora!",
        },
      },
      plans: {
        form: {
          name: "Nome",
          users: "Usuários",
          connections: "Conexões",
          campaigns: "Campanhas",
          schedules: "Agendamentos",
          enabled: "Habilitado",
          disabled: "Desabilitado",
          clear: "Cancelar",
          delete: "Excluir",
          save: "Salvar",
          yes: "Sim",
          no: "Não",
          money: "R$",
        },
      },
      companies: {
        title: "Cadastrar Empresa",
        form: {
          name: "Nome da Empresa",
          plan: "Plano",
          token: "Token",
          submit: "Cadastrar",
          success: "Empresa criada com sucesso!",
        },
      },
      auth: {
        toasts: {
          success: "Login realizado com sucesso!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Tickets hoje: ",
          },
        },
      },
      connections: {
        title: "Conexões",
        subtitle: "Todos os WhatsApp",
        toasts: {
          deleted: "Conexão do WhatsApp excluída com sucesso!",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida. Tem certeza?",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "Tem certeza? Você precisará escanear o código QR novamente.",
        },
        buttons: {
          add: "Adicionar WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Tentar novamente",
          qrcode: "CÓDIGO QR",
          newQr: "Novo CÓDIGO QR",
          connecting: "Conectando",
          restart: "Reiniciar",
        },
        toolTips: {
          disconnected: {
            title: "Falha ao iniciar sessão do WhatsApp",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e tente novamente, ou solicite um novo código QR",
          },
          qrcode: {
            title: "Aguardando leitura do código QR",
            content:
              "Clique no botão 'CÓDIGO QR' e escaneie o código QR com seu celular para iniciar a sessão",
          },
          connected: {
            title: "Conexão estabelecida!",
          },
          timeout: {
            title: "A conexão com o celular foi perdida",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e o WhatsApp esteja aberto, ou clique no botão 'Desconectar' para obter um novo código QR",
          },
        },
        table: {
          name: "Nome",
          number: "Número",
          status: "Status",
          lastUpdate: "Última atualização",
          default: "Padrão",
          actions: "Ações",
          session: "Sessão",
        },
      },
      whatsappModal: {
        title: {
          add: "Adicionar WhatsApp",
          edit: "Editar WhatsApp",
        },
        tabs: {
          general: "Geral",
          messages: "Mensagens",
          assessments: "Avaliações",
          integrations: "Integrações",
          schedules: "Horário de atendimento",
        },
        form: {
          name: "Nome",
          default: "Padrão",
          sendIdQueue: "Fila",
          timeSendQueue: "Redirecionar para fila em X minutos",
          queueRedirection: "Redirecionamento de Fila",
          outOfHoursMessage: "Mensagem fora do horário",
          queueRedirectionDesc: "Selecione uma fila para a qual serão redirecionados os contatos que não possuem fila",
          prompt: "Prompt",
          expiresTicket: "Fechar chats abertos após X minutos",
          expiresInactiveMessage: "Mensagem de encerramento por inatividade",
          greetingMessage: "Mensagem de boas-vindas",
          complationMessage: "Mensagem de finalização",
          sendIdQueue: "Fila",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "WhatsApp salvo com sucesso.",
      },
      qrCode: {
        message: "Escaneie o código QR para fazer login",
      },
      contacts: {
        title: "Contatos",
        toasts: {
          deleted: "Contato excluído com sucesso!",
          deletedAll: "Todos os contatos excluídos com sucesso!",
        },
        searchPlaceholder: "Pesquisar...",
        confirmationModal: {
          deleteTitle: "Excluir ",
          deleteAllTitle: "Excluir Todos",
          importTitle: "Importar contatos",
          deleteMessage: "Tem certeza que deseja excluir este contato? Todos os tickets relacionados serão perdidos.",
          deleteAllMessage: "Tem certeza que deseja excluir todos os contatos? Todos os tickets relacionados serão perdidos.",
          importMessage: "Deseja importar todos os contatos do seu telefone?",
        },
        confirmationModal: {
          importTitlte: "Importar contatos",
          importMessage: "Esta ação importará os contatos salvos na agenda do WhatsApp. Alguns modelos podem não permitir esta funcionalidade ou conforme sua configuração de privacidade. Verifique o resultado em 1 hora!",
          deleteTitle: "Excluir",
          deleteMessage: "Tem certeza que deseja excluir este contato? Todos os tickets relacionados serão perdidos.",
        },
        buttons: {
          import: "Importar Contatos",
          importSheet: "Importar Excel",
          add: "Adicionar Contato",
          export: "Exportar Contatos",
          delete: "Excluir Todos os Contatos"
        },
        table: {
          name: "Nome",
          whatsapp: "WhatsApp",
          email: "E-mail",
          actions: "Ações",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Adicionar projeto",
          edit: "Editar projeto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nome",
          projectName: "Nome do Projeto",
          language: "Idioma",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tempo em minutos para expirar uma conversa",
          typebotKeywordFinish: "Palavra-chave para finalizar o ticket",
          typebotKeywordRestart: "Palavra-chave para reiniciar o fluxo",
          typebotRestartMessage: "Mensagem ao reiniciar a conversa",
          typebotUnknownMessage: "Mensagem de opção inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensagens",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
          test: "Testar Bot",
        },
        messages: {
          testSuccess: "Integração testada com sucesso!",
          addSuccess: "Integração adicionada com sucesso.",
          editSuccess: "Integração editada com sucesso.",
        },
      },
      sideMenu: {
        name: "Menu lateral inicial",
        note: "Se habilitado, o menu lateral iniciará fechado",
        options: {
          enabled: "Aberto",
          disabled: "Fechado",
        },
      },
      promptModal: {
        form: {
          name: "Nome",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de tokens na resposta",
          temperature: "Temperatura",
          apikey: "Chave de API",
          max_messages: "Máximo de mensagens no histórico",
          voiceKey: "Chave de API de voz",
          voiceRegion: "Região de voz",
        },
        success: "Prompt salvo com sucesso!",
        title: {
          add: "Adicionar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nome",
          queue: "Departamento/Fila",
          max_tokens: "Máximo de tokens na resposta",
          actions: "Ações",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Tem certeza? Esta ação não pode ser revertida.",
        },
        buttons: {
          add: "Adicionar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Adicionar contato",
          edit: "Editar contato",
        },
        form: {
          mainInfo: "Dados do contato",
          extraInfo: "Informações adicionais",
          name: "Nome",
          number: "Número do WhatsApp",
          email: "E-mail",
          extraName: "Nome do campo",
          extraValue: "Valor",
          disableBot: "Desabilitar chatbot",
          whatsapp: "Conexão de Origem:",
        },
        buttons: {
          addExtraInfo: "Adicionar informação",
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Contato salvo com sucesso.",
      },
      queueModal: {
        title: {
          add: "Adicionar fila",
          edit: "Editar fila",
        },
        toasts: {
          deleted: "Registro excluído",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser desfeita.",
        },
        form: {
          name: "Nome",
          color: "Cor",
          greetingMessage: "Mensagem de boas-vindas",
          complationMessage: "Mensagem de finalização",
          outOfHoursMessage: "Mensagem fora do horário",
          ratingMessage: "Mensagem de avaliação",
          token: "Token",
          orderQueue: "Ordem da fila (Bot)",
          integrationId: "Integração",
          filas: "Filas",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
          attach: "Anexar Arquivo",
        },
        serviceHours: {
          dayWeek: "Dia da semana",
          startTimeA: "Hora de início - 1",
          endTimeA: "Hora de término - 1",
          startTimeB: "Hora de início - 2",
          endTimeB: "Hora de término - 2",
          monday: "Segunda-feira",
          tuesday: "Terça-feira",
          wednesday: "Quarta-feira",
          thursday: "Quinta-feira",
          friday: "Sexta-feira",
          saturday: "Sábado",
          sunday: "Domingo",
        },
      },
      qrCodeModal: {
        title: "Código QR",
      },
      userModal: {
        title: {
          add: "Adicionar usuário",
          edit: "Editar usuário",
        },
        form: {
          name: "Nome",
          email: "E-mail",
          password: "Senha",
          profile: "Perfil",
          whatsapp: "Conexão padrão",
          SuperIs: "DEFINIR SUPERUSUÁRIO (Apenas Admin)",
          allTicket: "Tickets sem fila [Invisível]",
          allTicketEnabled: "Habilitado",
          allTicketDesabled: "Desabilitado",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Usuário salvo com sucesso.",
      },
      scheduleModal: {
        title: {
          add: "Novo agendamento",
          edit: "Editar agendamento",
        },
        form: {
          body: "Mensagem",
          contact: "Contato",
          sendAt: "Data de agendamento",
          sentAt: "Data de envio",
          geral: "Abrir Ticket?",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Agendamento salvo com sucesso.",
      },
      tagModal: {
        title: {
          add: "Nova Etiqueta",
          edit: "Editar Etiqueta",
        },
        form: {
          name: "Nome",
          color: "Cor",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Etiqueta salva com sucesso.",
      },
      chat: {
        noTicketMessage: "Selecione um ticket para começar a conversar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTE E SOLTE OS ARQUIVOS NO CAMPO ABAIXO",
          titleFileList: "Lista de arquivos"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Novo",
          closeallTicket: "Fechar"
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        inbox: {
          closedAllTickets: "Fechar todos os tickets?",
          closedAll: "Fechar Todos",
          newTicket: "Novo Ticket",
          yes: "SIM",
          no: "NÃO",
          open: "Abertos",
          resolverd: "Resolvidos",
        },
        toasts: {
          deleted: "O ticket que você estava visualizando foi excluído.",
        },
        notification: {
          message: "Mensagem de",
        },
        tabs: {
          open: {
            title: "Abertas"
          },
          closed: {
            title: "Fechadas"
          },
          search: {
            title: "Buscar"
          },
        },
        search: {
          placeholder: "Buscar tickets e mensagens",
          filterConnections: "Filtro por conexões",
          filterContacts: "Filtro por contato",
          filterConections: "Filtro por Conexão",
          filterConectionsOptions: {
            open: "Aberto",
            closed: "Fechado",
            pending: "Pendente",
          },
          filterUsers: "Filtro por Usuários",
          ticketsPerPage: "Tickets por página"
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Digite para buscar usuários",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Selecione uma fila",
        noOptions: "Nenhum usuário encontrado com esse nome",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        called: "Chamado",
        pendingHeader: "Aguardando",
        assignedHeader: "Atendendo",
        noTicketsTitle: "Nada aqui!",
        noTicketsMessage:
          "Nenhum ticket encontrado com esse status ou termo de busca",
        buttons: {
          accept: "Aceitar",
          closed: "Finalizar",
          transfer: "Transferir",
          reopen: "Reabrir",
          exportAsPDF: "Exportar como PDF"
        },
      },
      newTicketModal: {
        title: "Criar Ticket",
        fieldLabel: "Digite para buscar o contato",
        add: "Adicionar",
        buttons: {
          ok: "Salvar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Painel de controle",
          connections: "Conexões",
          tickets: "Atendimentos",
          tasks: "Tarefas",
          quickMessages: "Respostas rápidas",
          contacts: "Contatos",
          queues: "Filas e Chatbot",
          tags: "Etiquetas",
          administration: "Administração",
          users: "Usuários",
          settings: "Configurações",
          helps: "Ajuda",
          messagesAPI: "API",
          schedules: "Agendamentos",
          campaigns: "Campanhas",
          annoucements: "Anúncios",
          loglauncher: "Atualizações",
          chats: "Chat Interno",
          financeiro: "Financeiro",
          files: "Lista de arquivos",
          prompts: "Open.Ai",
          reports: "Relatórios",
          queueIntegration: "Integrações",
          LogLauncher: "Notícias",
          Logoutbar: "Sair",
        },
        appBar: {
          notRegister: "Sem notificações",
          user: {
            profile: "Perfil",
            logout: "Sair",
          },
        },
      },
      queueIntegration: {
        title: "Integrações",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nome",
          projectName: "Nome do Projeto",
          language: "Idioma",
          lastUpdate: "Última atualização",
          actions: "Ações",
        },
        buttons: {
          add: "Adicionar Projeto",
        },
        searchPlaceholder: "Pesquisar...",
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Tem certeza? Esta ação não pode ser revertida e será removida das filas e conexões vinculadas!",
        },
      },
      reports: {
        title: "Relatórios de Tickets",
        table: {
          id: "Ticket",
          user: "Usuário",
          dateOpen: "Data de Abertura",
          dateClose: "Data de Fechamento",
          NPS: "NPS",
          status: "Status",
          whatsapp: "Conexão",
          queue: "Fila",
          actions: "Ações",
          lastMessage: "Últ. Mensagem",
          contact: "Cliente",
          supportTime: "Tempo de Atendimento"
        },
        buttons: {
          filter: "Aplicar Filtro",
        },
        searchPlaceholder: "Pesquisar...",
      },
      files: {
        title: "Lista de arquivos",
        table: {
          name: "Nome",
          contacts: "Contatos",
          actions: "Ação",
        },
        toasts: {
          deleted: "Lista excluída com sucesso!",
          deletedAll: "Todas as listas excluídas com sucesso!",
        },
        buttons: {
          add: "Adicionar",
          deleteAll: "Excluir Todos",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteAllTitle: "Excluir Todos",
          deleteMessage: "Tem certeza que deseja excluir esta lista?",
          deleteAllMessage: "Tem certeza que deseja excluir todas as listas?",
        },
      },
      languages: {
        undefined: "Idioma",
        "pt-BR": "Português",
        es: "Espanhol",
        en: "Inglês",
        tr: "Turco",
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensagem",
          token: "Token cadastrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nome do arquivo",
          media: "Arquivo",
          token: "Token cadastrado",
        },
      },
      notifications: {
        noTickets: "Nenhuma notificação.",
      },
      quickMessages: {
        title: "Respostas Rápidas",
        searchPlaceholder: "Pesquisar...",
        noAttachment: "Sem anexo",
        confirmationModal: {
          deleteTitle: "Exclusão",
          deleteMessage: "Esta ação é irreversível! Deseja continuar?",
        },
        buttons: {
          add: "Adicionar",
          attach: "Anexar Arquivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "Atalho adicionado com sucesso!",
          deleted: "Atalho excluído com sucesso!",
        },
        dialog: {
          title: "Mensagem Rápida",
          shortcode: "Atalho",
          message: "Resposta",
          save: "Salvar",
          cancel: "Cancelar",
          geral: "Permitir edição",
          add: "Adicionar",
          edit: "Editar",
          visao: "Permitir visualizar",
          geral: 'Global',
        },
        table: {
          shortcode: "Atalho",
          message: "Mensagem",
          actions: "Ações",
          mediaName: "Nome do Arquivo",
          status: 'Global',
        },
      },
      messageVariablesPicker: {
        label: "Variáveis disponíveis",
        vars: {
          contactFirstName: "Primeiro Nome",
          contactName: "Nome",
          greeting: "Saudação",
          protocolNumber: "Protocolo",
          date: "Data",
          hour: "Hora",
        },
      },
      contactLists: {
        title: "Listas de Contatos",
        table: {
          name: "Nome",
          contacts: "Contatos",
          actions: "Ações",
        },
        buttons: {
          add: "Nova Lista",
        },
        dialog: {
          name: "Nome",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser desfeita.",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      contactListItems: {
        title: "Contatos",
        searchPlaceholder: "Pesquisar",
        buttons: {
          add: "Novo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nome",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nome",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "E-mail",
          actions: "Ações",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser desfeita.",
          importMessage: "Deseja importar os contatos desta planilha?",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      campaigns: {
        title: "Campanhas",
        searchPlaceholder: "Pesquisar",
        buttons: {
          add: "Nova Campanha",
          contactLists: "Listas de Contatos",
        },
        table: {
          name: "Nome",
          whatsapp: "Conexão",
          contactList: "Lista de Contatos",
          status: "Status",
          scheduledAt: "Agendado",
          completedAt: "Concluído",
          confirmation: "Confirmação",
          actions: "Ações",
        },
        dialog: {
          new: "Nova Campanha",
          update: "Editar Campanha",
          readonly: "Somente Leitura",
          form: {
            name: "Nome",
            message1: "Mensagem 1",
            message2: "Mensagem 2",
            message3: "Mensagem 3",
            message4: "Mensagem 4",
            message5: "Mensagem 5",
            confirmationMessage1: "Mensagem de Confirmação 1",
            confirmationMessage2: "Mensagem de Confirmação 2",
            confirmationMessage3: "Mensagem de Confirmação 3",
            confirmationMessage4: "Mensagem de Confirmação 4",
            confirmationMessage5: "Mensagem de Confirmação 5",
            messagePlaceholder: "Conteúdo da mensagem",
            whatsapp: "Conexão",
            status: "Status",
            scheduledAt: "Agendado",
            confirmation: "Confirmação",
            contactList: "Lista de Contato",
            tagList: "Lista de Etiquetas",
            fileList: "Lista de Arquivos"
          },
          buttons: {
            add: "Adicionar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar Envios",
            restart: "Reiniciar Envios",
            close: "Fechar",
            attach: "Anexar Arquivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser desfeita.",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          cancel: "Campanha cancelada",
          restart: "Campanha reiniciada",
          deleted: "Registro excluído",
        },
      },
      announcements: {
        active: "Ativo",
        inactive: "Inativo",
        title: "Anúncios",
        searchPlaceholder: "Pesquisar",
        buttons: {
          add: "Novo Anúncio",
          contactLists: "Listas de Anúncios",
        },
        table: {
          priority: "Prioridade",
          title: "Título",
          text: "Texto",
          mediaName: "Arquivo",
          status: "Status",
          actions: "Ações",
        },
        dialog: {
          edit: "Edição de Anúncio",
          add: "Novo Anúncio",
          update: "Editar Anúncio",
          readonly: "Somente Leitura",
          form: {
            priority: "Prioridade",
            title: "Título",
            text: "Texto",
            mediaPath: "Arquivo",
            status: "Status",
          },
          buttons: {
            add: "Adicionar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Fechar",
            attach: "Anexar Arquivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser desfeita.",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          deleted: "Registro excluído",
        },
      },
      campaignsConfig: {
        title: "Configurações de Campanhas",
      },
      queues: {
        title: "Filas e Chatbot",
        table: {
          id: "ID",
          name: "Nome",
          color: "Cor",
          greeting: "Mensagem de boas-vindas",
          actions: "Ações",
          orderQueue: "Ordem da fila (bot)",
        },
        buttons: {
          add: "Adicionar fila",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Tem certeza? Esta ação não pode ser revertida! Os tickets desta fila continuarão existindo, mas não terão mais nenhuma fila atribuída.",
        },
      },
      queueSelect: {
        inputLabel: "Filas",
      },
      users: {
        title: "Usuários",
        table: {
          id: "ID",
          name: "Nome",
          status: "Status",
          email: "E-mail",
          profile: "Perfil",
          actions: "Ações",
        },
        status: {
          online: "Usuários online",
          offline: "Usuários offline",
        },
        buttons: {
          add: "Adicionar usuário",
        },
        toasts: {
          deleted: "Usuário excluído com sucesso.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Todos os dados do usuário serão perdidos. Os tickets abertos deste usuário serão movidos para a fila.",
        },
      },
      helps: {
        title: "Central de Ajuda",
      },
      schedules: {
        title: "Agendamentos",
        confirmationModal: {
          deleteTitle: "Tem certeza que deseja excluir este agendamento?",
          deleteMessage: "Esta ação não pode ser desfeita.",
        },
        table: {
          contact: "Contato",
          body: "Mensagem",
          sendAt: "Data de agendamento",
          sentAt: "Data de envio",
          status: "Status",
          actions: "Ações",
        },
        buttons: {
          add: "Novo agendamento",
        },
        toasts: {
          deleted: "Agendamento excluído com sucesso.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "Tem certeza que deseja excluir esta etiqueta?",
          deleteMessage: "Esta ação não pode ser desfeita.",
          deleteAllMessage: "Tem certeza que deseja excluir todas as etiquetas?",
          deleteAllTitle: "Excluir Todas",
        },
        table: {
          name: "Nome",
          color: "Cor",
          tickets: "Registros Etiquetados",
          actions: "Ações",
        },
        buttons: {
          add: "Nova Etiqueta",
          deleteAll: "Excluir Todas",
        },
        toasts: {
          deletedAll: "Todas as etiquetas excluídas com sucesso!",
          deleted: "Etiqueta excluída com sucesso.",
        },
      },
      settings: {
        success: "Configurações salvas com sucesso.",
        title: "Configurações",
        settings: {
          userCreation: {
            name: "Criação de usuário",
            options: {
              enabled: "Habilitado",
              disabled: "Desabilitado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído a:",
          buttons: {
            return: "Voltar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceitar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Digite uma mensagem",
        placeholderClosed:
          "Reabra ou aceite este ticket para enviar uma mensagem.",
        signMessage: "Assinar",
      },
      mediaModal: {
        title: "Enviar multimídia",
        caption: "Legenda (opcional)",
        captionPlaceholder: "Escreva uma legenda para o arquivo...",
        addMore: "Adicionar mais",
        dragDropText: "Solte os arquivos aqui para enviar",
        buttons: {
          cancel: "Cancelar",
          send: "Enviar",
        },
        maxFiles: "São permitidos no máximo 10 arquivos",
      },
      messageSearch: {
        placeholder: "Buscar mensagens...",
        noResults: "Nenhuma mensagem encontrada",
        searchButton: "Buscar mensagens",
      },
      contactDrawer: {
        header: "Detalhes do contato",
        buttons: {
          edit: "Editar contato",
        },
        extraInfo: "Informações adicionais",
      },
      fileModal: {
        title: {
          add: "Adicionar lista de arquivos",
          edit: "Editar lista de arquivos",
        },
        buttons: {
          okAdd: "Salvar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Adicionar arquivo",
        },
        form: {
          name: "Nome da lista de arquivos",
          message: "Detalhes da lista",
          fileOptions: "Lista de arquivos",
          extraName: "Mensagem para enviar com o arquivo",
          extraValue: "Valor da opção",
        },
        success: "Lista de arquivos salva com sucesso!",
      },
      ticketOptionsMenu: {
        schedule: "Agendar",
        delete: "Excluir",
        transfer: "Transferir",
        registerAppointment: "Anotações do contato",
        appointmentsModal: {
          title: "Anotações do contato",
          textarea: "Anotação",
          placeholder: "Insira aqui a informação que deseja registrar",
        },
        confirmationModal: {
          title: "Excluir o ticket",
          titleFrom: "do contato ",
          message:
            "Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.",
        },
        buttons: {
          delete: "Excluir",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Excluir",
        reactionSuccess: "Reação adicionada",
        reply: "Responder",
        edit: 'Editar Mensagem',
        forward: "Encaminhar",
        toForward: "Encaminhar",
        react: "Reagir",
        confirmationModal: {
          title: "Excluir mensagem?",
          message: "Esta ação não pode ser desfeita.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Deve haver pelo menos um WhatsApp padrão.",
        ERR_NO_DEF_WAPP_FOUND:
          "Nenhum WhatsApp padrão encontrado. Verifique a página de conexões.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sessão do WhatsApp não foi inicializada. Verifique a página de conexões.",
        ERR_WAPP_CHECK_CONTACT:
          "Não foi possível verificar o contato do WhatsApp. Verifique a página de conexões",
        ERR_WAPP_INVALID_CONTACT: "Este não é um número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "Não foi possível baixar a mídia do WhatsApp. Verifique a página de conexões.",
        ERR_INVALID_CREDENTIALS:
          "Erro de autenticação. Por favor, tente novamente.",
        ERR_SENDING_WAPP_MSG:
          "Erro ao enviar mensagem do WhatsApp. Verifique a página de conexões.",
        ERR_DELETE_WAPP_MSG: "Não foi possível excluir a mensagem do WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Já existe um ticket aberto para este contato.",
        ERR_SESSION_EXPIRED: "Sessão expirada. Por favor, faça login.",
        ERR_USER_CREATION_DISABLED:
          "A criação de usuários foi desabilitada pelo administrador.",
        ERR_NO_PERMISSION: "Você não tem permissão para acessar este recurso.",
        ERR_DUPLICATED_CONTACT: "Já existe um contato com este número.",
        ERR_NO_SETTING_FOUND: "Nenhuma configuração encontrada com este ID.",
        ERR_NO_CONTACT_FOUND: "Nenhum contato encontrado com este ID.",
        ERR_NO_TICKET_FOUND: "Nenhum ticket encontrado com este ID.",
        ERR_NO_USER_FOUND: "Nenhum usuário encontrado com este ID.",
        ERR_NO_WAPP_FOUND: "Nenhum WhatsApp encontrado com este ID.",
        ERR_CREATING_MESSAGE: "Erro ao criar a mensagem no banco de dados.",
        ERR_CREATING_TICKET: "Erro ao criar o ticket no banco de dados.",
        ERR_FETCH_WAPP_MSG:
          "Erro ao buscar a mensagem no WhatsApp, talvez seja muito antiga.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Esta cor já está em uso, escolha outra.",
        ERR_WAPP_GREETING_REQUIRED:
          "A mensagem de boas-vindas é obrigatória quando há mais de uma fila.",
        ERR_CHECK_NUMBER: "Número inválido. Verifique o número e tente novamente.",
      },
    },
  },
};

export {
  messages
};
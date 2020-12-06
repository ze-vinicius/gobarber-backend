# gobarber-backend

backend da aplicação "GoBarber" desenvolvida durante o bootcamp da Rocketseat

## Próximas Features

Aqui estão definidas as próximas features da aplicação GoBarber a serem desenvolvidas durante o bootcamp Gostack.

## Atualização do perfil

### RF

- O usuário deve poder atualizar o seu nome, email e senha;

### RN

- O usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar a sua senha, o usuário precisa confirmar a nova senha;

## Painel do prestador

### RF

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

### RNF

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real-utilizando Socket.io;

### RN

- A notificação deve ter um status de "lida" ou "não lida" para que o prestador possa gerenciar;

## Agendamento de serviços

### RF

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

### RNF

- A listagem de prestadores deve ser armazenada em cache;

### RN

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h e último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

`kubernetes-docker-rancherdesktop-labs/README.md` - Template Git Project

## 1. Introdução

Este repositório contém os artefatos do projeto / laboratório de avaliação  **kubernetes-docker-rancherdesktop-labs** organizado conforme o índice de conteúdo abaixo:

##### Índice de conteúdo  
- [1. Introdução](#1-introdução)
- [2. Documentação](#2-documentação)
  * [2.1. Diagrama de Caso de Uso (Use Case Diagram)](#21-diagrama-de-caso-de-uso-use-case-diagram)
  * [2.2. Diagrama de Implantação (Deploy Diagram)](#22-diagrama-de-implantação-deploy-diagram)
  * [2.4. Diagrama de Mapa Mental (Mind Map Diagram)](#24-diagrama-de-mapa-mental-mind-map-diagram)
  * [2.8. Notas de atenção e Avisos (Notice and information)](#28-notas-de-atenção-e-avisos-notice-and-information)
  * [2.9. Glossário de Termos (Glossary)](#29-glossário-de-termos-glossary)
- [3. Projeto / Laboratório](#3-projeto--laboratório)
  * LAB-01: Install WSL, Rancher Desktop and command line with nerdctl
  * LAB-02: Basic Docker Commands
  * LAB-03: Windows Client MongoDB Studio 3T connect database
  * LAB-04: Docker Images vs Containers
  * LAB-05: Basic Kubernetes Commands
  * LAB-06: Kubernetes, Python, Flask e MongoDB
  * LAB-07: Kubernetes Self Healing, application health check and resources limits
  * LAB-08: Kubernetes IDE Lens

- [I - Referências](#i---referências)



## 2. Documentação

### 2.1. Diagrama de Caso de Uso (Use Case Diagram)

![UseCaseDiagram-Context.png](./doc/uml-diagrams/UseCaseDiagram-kubernetes.png) 


### 2.2. Diagrama de Implantação (Deploy Diagram)

![DeployDiagram-Context.png](./doc/uml-diagrams/DeployDiagram-kubernetes-docker-rancherdesktop.png) 


### 2.4. Diagrama de Mapa Mental (Mind Map Diagram)

![MindMapDiagram-Context.png](./doc/mind-maps/MindMapDiagram-kubernetes-docker-rancherdesktop.png) 


### 2.8. Notas de atenção e Avisos (Notice and information)

* A idéia deste repositório é elaborar, construir e revisar um material documentado que possa usar como referência inicial sobre Kubernetes e Devops, seja para um projeto ou para um novo laboratório, evoluindo ou especializando (abstração vs especialização) e facilitando o aprendizado constante
* Deixo aqui o registro e agradecimento aos produtores de conteúdos que me inspiraram e  material foi inspirado e baseado na 
  * [Playlist da Iniciativa Kubernetes - Semana Kubedev](https://www.youtube.com/watch?v=0V_zGIEqIBc&list=PLZfrXScDmaiPwFQvY4JnPZkgC3NmqxFLX) produzido pelo canal do Youtube [Kubedev - Fabrício Veronez](https://www.youtube.com/channel/UCUy0NlW6WlVFj8V3xhXegYQ)
  * [Playlist de Apache Kafka](https://www.youtube.com/watch?v=o5yviW6QSrE&list=PL5aY_NrL1rjt_AZxj11kQjiTNLGg4ZaZA) produzido pelo canal do Youtube [FullCycle - Wesley Willians](https://www.youtube.com/channel/UCMUoZehUZBhLb8XaTc8TQrA)
  * [Kafka (Plataforma de Mensageria e Streaming) // Dicionário do Programador](https://www.youtube.com/watch?v=qOqXz5Qv_-8&list=PLORrDfZD1hkGVBK4byiS82zaAutzuhsRz) produzido pelo canal do Youtube [Código Fonte TV - Gabriel Fróes e Vanessa Weber](https://www.youtube.com/watch?v=qOqXz5Qv_-8&t=74s)


### 2.9. Glossário de Termos (Glossary)

De uma forma geral, vamos tentar <ins>definir</ins> e <ins>caracterizar</ins> alguns dos termos utilizados neste projeto para permitir uma melhor compreensão e entendimento:

| Termo       | Significado                     |
| :---------- | :------------------------------ |
| `nerdctl`   | programa em linha de comando do Rancher Desktop que equivale ao `docker xxxx` no Docker. |


## 3. Projeto / Laboratório

| Laboratório | Descrição                       |
| :---------- | :------------------------------ |
| ### [LAB-01](./md/README-install-wsl-rancherdesktop-windows.md)                 | Install WSL, Rancher Desktop and command line with nerdctl |
| ### [LAB-02](./md/README-basic-docker-commands.md)                              | Basic Docker Commands |
| ### [LAB-03](./md/README-install-windows-client-mongodb-studio3t.md)            | Windows Client MongoDB Studio 3T connect database |
| ### [LAB-04](./md/README-docker-images-containers.md)                           | Docker Images vs Containers |
| ### [LAB-05](./md/README-basic-kubernetes-commands.md)                          |  Basic Kubernetes Commands |
| ### [LAB-06](./md/README-kubernetes-python-flask-mongodb.md)                    | Kubernetes, Python, Flask e MongoDB |
| ### [LAB-07](./md/README-kubernetes-nodejs-http-echo.md)                        | NodeJS http echo and health check |
| ### [LAB-08](./md/README-install-windows-client-kubernetes-ide-lens.md)         | Kubernetes IDE Lens |
| ### [LAB-09](./md/README-kubernetes-selfhealing-healthcheck-resourceslimits.md) | Kubernetes Self Healing, application health check and resources limits |


## I - Referências

* Github README.md writing sintax
  * [Basic Github Markdown Writing Format](https://docs.github.com/pt/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax)  
  * [Github Markdown Chead Sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
  * [Github Mastering Markdown](https://guides.github.com/features/mastering-markdown/#what)
  * [Table of contents generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)
* [Canal do Fabrício Veronez KubeDev no Youtube](https://www.youtube.com/channel/UCUy0NlW6WlVFj8V3xhXegYQ)
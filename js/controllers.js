angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope, $location, $uibModal)
    {

        $scope.items = [
        {
            href: "#/cliente",
            label: 'cliente!'
        },
        {
            href: "#/tela3",
            label: 'tela3.'
        },
        {
            href: "#/simulacoes",
            label: 'termometro'
        }];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {};

        $scope.toggleDropdown = function($event)
        {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };


        $rootScope.dadosGraficos = [
        {
            "x": "mês1",
            "cim": 47,
            "col": 12,
            "bas": 6,
            "cal": 21,
            "agr": 23
        },{
            "x": "mês2",
            "cim": 55,
            "col": 22,
            "bas": 11,
            "cal": 22,
            "agr": 27
        },{
            "x": "mês3",
            "cim": 66,
            "col": 33,
            "bas": 15,
            "cal": 35,
            "agr": 45
        }]; 



        $rootScope.dadosGraficosColunas = [
        {
            "id": "cim",
            "type": "bar",
            "name": "cimentos"
        },
        {
            "id": "col",
            "type": "bar",
            "name": "colantes"
        },
        {
            "id": "bas",
            "type": "bar",
            "name": "básicas"
        },
        {
            "id": "cal",
            "type": "bar",
            "name": "cales"
        },
        {
            "id": "agr",
            "type": "bar",
            "name": "agregados"
        }];

        $rootScope.datax = {
            "id": "x"
        };

        $scope.openPop = function() {
            $rootScope.open('md', '', 'view/modal/pedido.html', '');
        }

        $scope.openPop();
        
    })
    .controller("ModalInstanceCtrl", function($scope, $rootScope, $filter, $uibModal, $document, $location, $uibModalInstance)
    {

        $scope.cancel = function()
        {
            $uibModalInstance.dismiss('cancel');
        };

    })
    .controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location)
    {

        $rootScope.open = function(size, parentSelector, page, tipo)
        {

            var r = '?n=' + Math.random();

            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open(
            {
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: page + r,
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve:
                {
                    items: function()
                    {
                        return [];
                    }
                }
            });

        };


        $rootScope.pesquisas = [
            {
                id: 652323,
                data: "01.04.2017 - 08:22",
                resumo: "O cliente não efetuou compras nos últimos 3 meses, porém agora demonstra interesse de produtos para obras especiais."
            },
            {
                id: 652434,
                data: "02.04.2017 - 10:52",
                resumo: "Sem dados"
            },
            {
                id: 652434,
                data: "03.04.2017 - 11:11",
                resumo: "Sem dados"
            }

        ];



        $rootScope.interacoes = [
        {
            id: 6478,
            data: "01.04.2017 - 08:22",
            status: "Aberto",
            tipoId: "1",
            tipo: "LIGACAO IN",
            resumo: "Informações de crédito para novas compras."
        },
        {
            id: 6455,
            data: "02.04.2017 - 10:52",
            status: "Fechado",
            tipoId: "2",
            tipo: "LIGACAO OUT",
            resumo: "Cliente solicitou informação sobre produto Votomassa."
        },
        {
            id: 6155,
            data: "05.04.2017 - 11:11",
            status: "Aberto",
            tipoId: "1",
            tipo: "LIGACAO IN",
            resumo: "Contato do cliente via Chat solicitando visita de vendedor externo."
        },
        {
            id: 6331,
            data: "10.04.2017 - 13:20",
            status: "Fechado",
            tipoId: "2",
            tipo: "LIGACAO OUT",
            resumo: "Informações de crédito para novas compras."
        }];







        $rootScope.skus = [
            {
                id: "SGG-76567576"
            },
            {
                id: "SGG-24434"
            }
            ,
            {
                id: "CIG-4343"
            }
            ,
            {
                id: "CIG-2223"
            }
            ,
            {
                id: "CIM-43243"
            }
            ,
            {
                id: "CIM-312321"
            }
            

        ]

        $rootScope.faturaTon = [
            {
                produto: "Cimentos",
                m1: 10,
                m2: 15,
                m3: 20,
                m4: 18,
                m5: 25,
                m6: 30
            },
             {
                produto: "Colantes",
                m1: 8,
                m2: 12,
                m3: 22,
                m4: 35,
                m5: 44,
                m6: 55
            },
             {
                produto: "Básicas",
                m1: 22,
                m2: 30,
                m3: 40,
                m4: 50,
                m5: 66,
                m6: 70
            },
             {
                produto: "Cales",
                m1: 9,
                m2: 22,
                m3: 23,
                m4: 25,
                m5: 20,
                m6: 31
            },
             {
                produto: "Agregados",
                m1: 15,
                m2: 30,
                m3: 45,
                m4: 40,
                m5: 50,
                m6: 60
            }

        ]

        $rootScope.pedidos = [
        {
            id: 9000000270,
            data: "11.05.17 15:13",
            status: "REALIZADO",
            resumo: "VOTOMASSA / VOTORAN OBRAS ESPECIAIS"
        },
        {
            id: 9000000227,
            data: "18.04.17 12:44",
            status: "FATURADO",
            resumo: "VOTORAN OBRAS ESPECIAIS / CAL HIDRATADA / VOTORAN OBRAS ESTRUTURAIS"
        },
        {
            id: 9000000214,
            data: "18.04.17 17:55",
            status: "ENTREGUE",
            resumo: "VOTORAN OBRAS ESPECIAIS / CAL HIDRATADA / VOTORAN OBRAS ESTRUTURAIS"
        }];

    });

app.controller('mainController', function($scope) {
    $scope.myData = [{Name: "Dhanesh", Role: "Project Manager"},
                     {Name: "Prasanth",Role: "Team Lead"},
                     {Name: "Narendra",  Role: "Developer"},
                     {Name: "Titus",  Role: "Developer"},
                     {Name: "Rakesh",  Role: "Developer"}];
					 

	$scope.columnDefs = [{ field: 'Name', displayName: 'Name', width: '120px', sortable: false},
                     { field: 'Role', width: '120px',   }];		

    $scope.mySelections = [] ;					 
					 
    $scope.gridOptions = { data: 'myData',
jqueryUITheme: false,
		jqueryUIDraggable: false,
        selectedItems: $scope.mySelections,
        showSelectionCheckbox: true,
        multiSelect: true,
        showGroupPanel: false,
        showColumnMenu: true,
        enableCellSelection: true,
        enableCellEditOnFocus: true,
        enableCellEdit: true,
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalServerItems',
        filterOptions: $scope.filterOptions,
        pagingOptions: $scope.pagingOptions,
        columnDefs: 'columnDefs',
		afterSelectionChange: function (row, event) {
          console.log("deal with row " + $scope.mySelections.length);
		    if($scope.mySelections.length == 2)
		    {
		      alert("Please select only on row");
			}
          }
	  };
		
       $scope.$watch('mySelections', function() {
	    console.log("mySelections has changed ");
       });		
					/*  setTimeout(function(){
					 
					  $scope.gridOptions.enableCellEditOnFocus = false,
					 $scope.gridOptions.enableCellEdit: false 
 
					  for(i in $scope.columnDefs)
					  {
                        $scope.columnDefs[i].enableCellEdit = false;
						console.log(""+i);
					  }
						 alert("Hello")
					   },  3000); */

});
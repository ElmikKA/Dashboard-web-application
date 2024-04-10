import { Box, useTheme } from "@mui/material"
import { DataGrid, GridToolbar} from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataContacts } from "../../data/mockData"
import Header from "../../components/Header"


const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    //This are the field that will be shown in the website
    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5
        }, 
        {
            field: "registrarId",
            headerName: "Registar ID",
        },
        {
            field: "name", 
            headerName: "Name", 
            flex: 1, 
            cellClassName: "name-column--cell"
        },
        {
            field: "age", 
            headerName: "Age", 
            type: "number", 
            headerAlign:"left", 
            align: "left"
        },
        {
            field: "phone", 
            headerName: "Phone Number", 
            flex: 1 
        },
        {
            field: "email", 
            headerName: "Email", 
            flex: 1
        },
        {
            field: "address",
            headerName: "Home Address",
            flex: 1
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            headerAlign:"left", 
            align: "left"
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
        },
    ]

    return(
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts for future Reference"/>
            <Box 
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                      border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                      border: "none"
                    },
                    "& .name-column--cell": {
                      color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      border: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    components={{ toolbar: GridToolbar}}
                    rows={mockDataContacts}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Contacts
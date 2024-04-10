import { useTheme, Box, Typography } from "@mui/material"
import { tokens } from "../../theme"
import Header from "../../components/Header"
import { DataGrid } from "@mui/x-data-grid"
import { mockDataInvoices } from "../../data/mockData"


const Invoices = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        {
            field: "id",
            headerName: "ID",
            headerClassName: "admin-app--header",
            flex: 0.5
        },
        {
            field: "name",
            headerName: "Name",
            headerClassName: "admin-app--header",
            cellClassName: "name-column--cell",
            flex: 1
        },
        {
            field: "phone",
            headerClassName: "admin-app--header",
            headerName: "Phone Number",
            flex: 1
        },
        {
            field: "email",
            headerClassName: "admin-app--header",
            headerName: "Email",
            flex: 1
        },
        {
            field: "cost",
            headerName: "Cost",
            headerClassName: "admin-app--header",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]} mt="13px">
                    {params.row.cost}
                </Typography>
            )
        },
        {
            field: "date",
            headerName: "Date",
            headerClassName: "admin-app--header",
            flex: 1
        },
    ]

    return(
        <Box m="20px">
            <Header title="INVOICES" subtitle="Here are all the invoices"></Header>
            <Box
                m="40px 0 0 0"
                height= "75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        border: "none"
                    },
                    "& .admin-app--header": {
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-virtualScrollerContent": {
                        border: "none",
                    }
                }}
            >
                <DataGrid rows={mockDataInvoices} columns={columns}/>
            </Box>
        </Box>
    )
}

export default Invoices
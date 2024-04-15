import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px"> 
            <Header title="FAQ" subtitle="Freaquently Asked Questions Page"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Officia facere unde ut libero doloribus? Commodi nemo dolorum incidunt quasi quos unde, 
                        facere possimus alias libero. Fugit accusantium a recusandae ullam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Officia facere unde ut libero doloribus? Commodi nemo dolorum incidunt quasi quos unde, 
                        facere possimus alias libero. Fugit accusantium a recusandae ullam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Officia facere unde ut libero doloribus? Commodi nemo dolorum incidunt quasi quos unde, 
                        facere possimus alias libero. Fugit accusantium a recusandae ullam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Officia facere unde ut libero doloribus? Commodi nemo dolorum incidunt quasi quos unde, 
                        facere possimus alias libero. Fugit accusantium a recusandae ullam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ
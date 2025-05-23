import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  Box,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Custom Connector with horizontal line style
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    borderColor: "#ccc",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

// Steps data
const steps = [
  {
    icon: faBuilding,
    title: "Regd. Office",
    description: `Office No. 1923, Etherea,\nBhutani Alphathum, Sector 90,\nNoida, Uttar Pradesh`,
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "info@webwisestudio.in",
  },
  {
    icon: faPhone,
    title: "Contact",
    description: "+91 7683021914",
  },
];

// Custom Step Icon component
const CustomStepIcon = ({ icon }) => (
  <Box
    sx={{
      backgroundColor: "#1e40af",
      color: "white",
      width: 40,
      height: 40,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mx: "auto",
    }}
  >
    <FontAwesomeIcon icon={icon} style={{ fontSize: 16 }} />
  </Box>
);

export default function HorizontalStepper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        overflowX: "auto",
        py: 4,
        px: 2,
      }}
    >
      <Box sx={{ minWidth: isMobile ? "600px" : "100%" }}>
        <Stepper
          alternativeLabel
          activeStep={-1}
          connector={<CustomConnector />}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                StepIconComponent={() => <CustomStepIcon icon={step.icon} />}
              >
                <Box sx={{ mt: 2, px: 1, textAlign: "center" }}>
                  <Typography variant="subtitle2" fontWeight="bold" sx={{ fontSize: isMobile ? "0.8rem" : "1rem" }}>
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    whiteSpace="pre-line"
                    sx={{ fontSize: isMobile ? "0.7rem" : "0.875rem" }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
}

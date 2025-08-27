import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const PricingSection = () => {
  return (
    <Box className="  mt-6">
      <div className="text-center mt-6">
        <h1 className="font-extrabold text-gray-900 text-4xl">
          {/* The Home for Everything You Create  */}
          <span className="bg-clip-text text-transparent bg-gradient-to-tl from-black via-gray-600 to-black">
            Pricing
          </span>
        </h1>
        <span className=" mx-auto block mt-6 text-lg text-gray-800 text-center max-w-3xl">
          We provide the ultimate space to organize your photos, documents, and
          videos securely. Access your entire digital life from any device,
          anywhere, without compromise
        </span>
      </div>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mt: 8 }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Starter"
            subheader="$9.99/month"
            titleTypographyProps={{ variant: "h4" }}
            subheaderTypographyProps={{ variant: "h6" }}
          />
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">
                1GB Storage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 Users
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlimited Projects
              </Typography>
              <Chip
                icon={<CheckCircle />}
                label="Free Trial"
                color="success"
                variant="outlined"
              />
            </Stack>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              For small teams and projects
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Pro"
            subheader="$19.99/month"
            titleTypographyProps={{ variant: "h4" }}
            subheaderTypographyProps={{ variant: "h6" }}
          />
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">
                10GB Storage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                50 Users
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlimited Projects
              </Typography>
              <Chip
                icon={<CheckCircle />}
                label="Free Trial"
                color="success"
                variant="outlined"
              />
            </Stack>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              For growing teams and projects
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Enterprise"
            subheader="$49.99/month"
            titleTypographyProps={{ variant: "h4" }}
            subheaderTypographyProps={{ variant: "h6" }}
          />
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">
                50GB Storage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                100 Users
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlimited Projects
              </Typography>
              <Chip
                icon={<CheckCircle />}
                label="Free Trial"
                color="success"
                variant="outlined"
              />
            </Stack>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              For large teams and projects
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default PricingSection;

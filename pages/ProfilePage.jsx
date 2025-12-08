import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Paper,
  Container,
  Link,
} from "@mui/material";
import {
  ShoppingBag,
  Favorite,
  LocalOffer,
  AccountBalanceWallet,
  CreditCard,
  AccountBalance,
  LocationOn,
  CardGiftcard,
} from "@mui/icons-material";
import OrdersSection from "../src/components/OrdersSection";

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    name: "Joaquim Fernandes",
    email: "joaquim@example.com",
    phone: "+91 9876543210",
  });
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");

  // Set active section based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/profile") {
      setActiveSection("Overview");
    } else if (path === "/profile/orders") {
      setActiveSection("Orders & Returns");
    } else if (path === "/profile/coupons") {
      setActiveSection("Coupons");
    } else if (path === "/profile/myntra-credit") {
      setActiveSection("Myntra Credit");
    } else if (path === "/profile/myncash") {
      setActiveSection("MynCash");
    } else if (path === "/profile/edit") {
      setActiveSection("Profile");
    } else if (path === "/profile/saved-cards") {
      setActiveSection("Saved Cards");
    } else if (path === "/profile/saved-upi") {
      setActiveSection("Saved UPI");
    } else if (path === "/profile/saved-wallets") {
      setActiveSection("Saved Wallets/BNPL");
    } else if (path === "/profile/addresses") {
      setActiveSection("Addresses");
    } else if (path === "/profile/myntra-insider") {
      setActiveSection("Myntra Insider");
    } else if (path === "/profile/delete-account") {
      setActiveSection("Delete Account");
    } else if (path === "/profile/terms") {
      setActiveSection("Terms of Use");
    } else if (path === "/profile/privacy") {
      setActiveSection("Privacy Center");
    }
  }, [location.pathname]);

  const menuSections = [
    {
      items: [{ label: "Overview", path: "/profile" }],
    },
    {
      title: "ORDERS",
      items: [{ label: "Orders & Returns", path: "/profile" }],
    },
    {
      title: "CREDITS",
      items: [
        { label: "Coupons", path: "/profile" },
        { label: "Myntra Credit", path: "/profile" },
        { label: "MynCash", path: "/profile" },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        { label: "Profile", path: "/profile" },
        { label: "Saved Cards", path: "/profile" },
        { label: "Saved UPI", path: "/profile" },
        { label: "Saved Wallets/BNPL", path: "/profile" },
        { label: "Addresses", path: "/profile" },
        { label: "Myntra Insider", path: "/profile" },
        { label: "Delete Account", path: "/profile" },
      ],
    },
    {
      title: "LEGAL",
      items: [
        { label: "Terms of Use", path: "/profile" },
        { label: "Privacy Center", path: "/profile" },
      ],
    },
  ];

  const featureCards = [
    {
      title: "Orders",
      description: "Check your order status",
      section: "Orders & Returns",
      path: "/profile",
      icon: <ShoppingBag sx={{ fontSize: 48 }} />,
    },
    {
      title: "Collections & Wishlist",
      description: "All your curated product collections",
      section: "Collections & Wishlist",
      path: "/wishlist",
      external: true,
      icon: <Favorite sx={{ fontSize: 48 }} />,
    },
    {
      title: "Myntra Credit",
      description: "Manage all your refunds & gift cards",
      section: "Myntra Credit",
      path: "/profile",
      icon: <LocalOffer sx={{ fontSize: 48 }} />,
    },
    {
      title: "MynCash",
      description: "Earn MynCash as you shop and use them in checkout",
      section: "MynCash",
      path: "/profile",
      icon: <AccountBalanceWallet sx={{ fontSize: 48 }} />,
    },
    {
      title: "Saved Cards",
      description: "Save your cards for faster checkout",
      section: "Saved Cards",
      path: "/profile",
      icon: <CreditCard sx={{ fontSize: 48 }} />,
    },
    {
      title: "Saved UPI",
      description: "View your saved UPI",
      section: "Saved UPI",
      path: "/profile",
      icon: <AccountBalance sx={{ fontSize: 48 }} />,
    },
    {
      title: "Saved Wallets/BNPL",
      description: "View your saved wallets",
      section: "Saved Wallets/BNPL",
      path: "/profile",
      icon: <AccountBalance sx={{ fontSize: 48 }} />,
    },
    {
      title: "Addresses",
      description: "Save addresses for a hassle-free checkout",
      section: "Addresses",
      path: "/profile",
      icon: <LocationOn sx={{ fontSize: 48 }} />,
    },
    {
      title: "Coupons",
      description: "Manage coupons for additional discounts",
      section: "Coupons",
      path: "/profile",
      icon: <CardGiftcard sx={{ fontSize: 48 }} />,
    },
  ];

  const handleCardClick = (card) => {
    if (card.external) {
      navigate(card.path);
    } else {
      navigate(card.path);
      setActiveSection(card.section);
    }
  };

  const handleMenuClick = (item) => {
    navigate(item.path);
    setActiveSection(item.label);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Overview":
        return (
          <Box sx={{ width: "850px" }}>
            {/* Profile Header Card */}
            <Card
              sx={{
                p: 3,
                mb: 3,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "none",
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                gap: 2,
                bgcolor: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: 2.5,
                  textAlign: { xs: "center", sm: "left" },
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 88, sm: 130 },
                    height: { xs: 88, sm: 130 },
                    bgcolor: "white",
                    fontSize: { xs: "32px", sm: "52px" },
                    borderRadius: 0,
                    fontWeight: 300,
                  }}
                >
                  {user?.name?.charAt(0)?.toUpperCase() || "J"}
                </Avatar>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      color: "#282c3f",
                      fontSize: "22px",
                    }}
                  >
                    {user?.name || "Joaquim Fernandes"}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#696e79",
                      mb: 0.3,
                      fontSize: "13px",
                    }}
                  >
                    {user?.email || "joaquim@example.com"}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#696e79",
                      fontSize: "13px",
                    }}
                  >
                    {user?.phone || "+91 9876543210"}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/profile");
                  setActiveSection("Profile");
                }}
                sx={{
                  borderColor: "#d4d5d9",
                  color: "#282c3f",
                  fontWeight: 700,
                  fontSize: "13px",
                  px: 3.5,
                  py: 1,
                  textTransform: "uppercase",
                  borderRadius: 0,
                  letterSpacing: "0.5px",
                  "&:hover": {
                    borderColor: "#282c3f",
                    bgcolor: "transparent",
                  },
                }}
              >
                Edit Profile
              </Button>
            </Card>

            {/* Feature Cards Grid */}
            <Grid container spacing={2}>
              {featureCards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link
                    onClick={() => handleCardClick(card)}
                    underline="none"
                    sx={{ cursor: "pointer" }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        border: "1px solid #e9e9eb",
                        borderRadius: 0,
                        height: "150px",
                        width: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "165px",
                        bgcolor: "white",
                        "&:hover": {
                          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      <Box sx={{ mb: 2, color: "#696e79", opacity: 0.85 }}>
                        {card.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: "15px",
                          mb: 1,
                          color: "#282c3f",
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#94969f",
                          fontSize: "12px",
                          lineHeight: 1.4,
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case "Orders & Returns":
        return <OrdersSection />;

      case "Coupons":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Coupons
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <CardGiftcard sx={{ fontSize: 80, color: "#696e79", mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                No Coupons Available
              </Typography>
              <Typography color="text.secondary">
                You don't have any coupons at the moment.
              </Typography>
            </Paper>
          </Box>
        );

      case "Myntra Credit":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Myntra Credit
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <LocalOffer sx={{ fontSize: 80, color: "#696e79", mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                No Myntra Credit
              </Typography>
              <Typography color="text.secondary">
                Your Myntra Credit balance is ₹0
              </Typography>
            </Paper>
          </Box>
        );

      case "MynCash":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              MynCash
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <AccountBalanceWallet
                sx={{ fontSize: 80, color: "#696e79", mb: 2 }}
              />
              <Typography variant="h6" sx={{ mb: 1 }}>
                MynCash Balance: ₹0
              </Typography>
              <Typography color="text.secondary">
                Earn MynCash as you shop and use them during checkout
              </Typography>
            </Paper>
          </Box>
        );

      case "Profile":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Edit Profile
            </Typography>
            <Paper
              sx={{
                p: 3,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                Personal Information
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Name
                  </Typography>
                  <Typography>{user?.name || "Not provided"}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography>{user?.email || "Not provided"}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography>{user?.phone || "Not provided"}</Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        );

      case "Saved Cards":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Saved Cards
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <CreditCard sx={{ fontSize: 80, color: "#696e79", mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                No Saved Cards
              </Typography>
              <Typography color="text.secondary">
                Save your cards for faster checkout
              </Typography>
            </Paper>
          </Box>
        );

      case "Saved UPI":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Saved UPI
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <AccountBalance sx={{ fontSize: 80, color: "#696e79", mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                No Saved UPI
              </Typography>
              <Typography color="text.secondary">
                You haven't saved any UPI IDs yet
              </Typography>
            </Paper>
          </Box>
        );

      case "Saved Wallets/BNPL":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Saved Wallets/BNPL
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <AccountBalance sx={{ fontSize: 80, color: "#696e79", mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                No Saved Wallets
              </Typography>
              <Typography color="text.secondary">
                You haven't saved any wallets yet
              </Typography>
            </Paper>
          </Box>
        );

      case "Addresses":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Addresses
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <LocationOn sx={{ fontSize: 80, color: "#696e79", mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                No Saved Addresses
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Save addresses for hassle-free checkout
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff3f6c",
                  "&:hover": { bgcolor: "#e63960" },
                  borderRadius: 0,
                }}
              >
                Add New Address
              </Button>
            </Paper>
          </Box>
        );

      case "Myntra Insider":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Myntra Insider
            </Typography>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Join Myntra Insider
              </Typography>
              <Typography color="text.secondary">
                Get exclusive benefits and rewards
              </Typography>
            </Paper>
          </Box>
        );

      case "Delete Account":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Delete Account
            </Typography>
            <Paper
              sx={{
                p: 3,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <Typography variant="body1" sx={{ mb: 2 }} color="error">
                Warning: This action cannot be undone
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Deleting your account will permanently remove all your data,
                including orders, addresses, and preferences.
              </Typography>
              <Button variant="outlined" color="error" sx={{ borderRadius: 0 }}>
                Delete My Account
              </Button>
            </Paper>
          </Box>
        );

      case "Terms of Use":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Terms of Use
            </Typography>
            <Paper
              sx={{
                p: 3,
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <Typography color="text.secondary">
                Terms and conditions content goes here...
              </Typography>
            </Paper>
          </Box>
        );

      case "Privacy Center":
        return (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Privacy Center
            </Typography>
            <Paper
              sx={{
                p: 3,
                minHeight: 300,
                border: "1px solid #e9e9eb",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <Typography color="text.secondary">
                Privacy policy content goes here...
              </Typography>
            </Paper>
          </Box>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f6",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress sx={{ color: "#ff3f6c" }} size={60} />
          <Typography sx={{ mt: 2, color: "#696e79" }}>
            Loading profile...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white" }}>
      <Container
        maxWidth={false}
        sx={{
          width: "60%",
          mx: "auto",
          pt: 10,
          pb: 4,
        }}
      >
        {/* Page Title */}
        <Box
          sx={{
            borderBottom: "1px solid #e0e0e2",
            pl: 1,
            pb: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "18px",
              color: "#282c3f",
            }}
          >
            Account
          </Typography>
          <Typography
            sx={{ color: "#646f88", fontSize: "12px", fontWeight: 400 }}
          >
            {user?.name || ""}
          </Typography>
        </Box>

        {/* Sidebar and Content Layout */}
        <Grid container spacing={0} sx={{ bgcolor: "white" }}>
          {/* Sidebar - 25% */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              borderRight: { md: "1px solid #e0e0e2" },
              pr: { md: 2 },
              height: "750px",
            }}
          >
            <Box>
              {menuSections.map((section, idx) => (
                <Box
                  key={idx}
                  sx={{
                    mb: 2,
                    pb: 2,
                    borderBottom: "1px solid #e0e0e2",
                    mt: 2,
                  }}
                >
                  {section.title && (
                    <Typography
                      sx={{
                        color: "#94969f",
                        fontWeight: 700,
                        fontSize: "12px",
                        letterSpacing: "0.8px",
                        mb: 1,
                        px: 1,
                      }}
                    >
                      {section.title}
                    </Typography>
                  )}
                  <List disablePadding>
                    {section.items.map((item, itemIdx) => (
                      <ListItem key={itemIdx} disablePadding>
                        <ListItemButton
                          onClick={() => handleMenuClick(item)}
                          sx={{
                            minHeight: "auto",
                            px: 1,
                            py: 0,
                            color:
                              activeSection === item.label
                                ? "#20bd99"
                                : "#282c3f",
                            fontWeight:
                              activeSection === item.label ? 700 : 400,
                            "&:hover": {
                              bgcolor: "#f5f5f6",
                            },
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: "15px",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Main Content - 75% */}
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              minHeight: "70vh",
            }}
          >
            <Box sx={{ p: 4 }}>{renderContent()}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;

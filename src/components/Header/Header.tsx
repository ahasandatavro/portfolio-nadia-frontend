// Header.tsx
import React from "react";
import { Group, Button, UnstyledButton, Text, Box, Burger, Drawer, ScrollArea, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus ,IconCode } from "@tabler/icons-react";


export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const nav = [
    { label: "Home", href: "#Home" },
    { label: "About me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Expriences", href: "#experience" },
    { label: "Reviews", href: "#review" },
    { label: "Blogs", href: "/blog" },
  ];

  return (
    <Box className="mx-auto">
      <header className="main-header fixed top-0 z-50 w-full" style={{ height: 70 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          {/* Left: Logo + wordmark */}
          <a href="/" className="flex items-center gap-3">
             <IconCode size={32} className="text-white" />
            <span className="text-white tracking-wider font-semibold">Nadia Tabassum</span>
          </a>

          {/* Center: Nav */}
          <Group h="100%" gap="lg" visibleFrom="md">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {n.label}
              </a>
            ))}
          </Group>

          {/* Right: CTA */}
          <Group visibleFrom="sm">
            <Button
              component="a"
              href="https://www.upwork.com/freelancers/~013cc71063b6d9a7af?mp_source=share"
              radius="xl"
              className="bg-lime-600 hover:bg-lime-400 text-white font-semibold px-5"
              leftSection={<IconPlus size={16} />}
            >
              Hire Me
            </Button>
          </Group>

          {/* Burger for mobile */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="white"
            className="cursor-pointer"
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
        classNames={{ body: "bg-[#0b0b12]" }}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md" className="text-white">
          <Divider my="sm" className="border-white/10" />
          <nav className="px-4 space-y-3">
            {nav.map((n) => (
              <UnstyledButton key={n.label} component="a" href={n.href} onClick={closeDrawer}>
                <Text className="block py-2 text-white/90 hover:text-white">
                  {n.label}
                </Text>
              </UnstyledButton>
            ))}
            <div className="pt-4">
              <Button
                component="a"
                href="https://www.upwork.com/freelancers/~013cc71063b6d9a7af?mp_source=share"
                radius="xl"
                fullWidth
                className="bg-lime-600 hover:bg-violate-300 text-black font-semibold"
                leftSection={<IconPlus size={16} />}
              >
                Hire Me
              </Button>
            </div>
          </nav>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

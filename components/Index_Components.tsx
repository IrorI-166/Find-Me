import { Navbar, Button, Link, Text, Grid, Card } from "@nextui-org/react";
import { Layout } from "./header/Layout";
import { AcmeLogo } from "./header/AcmeLogo";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';


export function Index_Header(props: any) {
    const router = useRouter();
    const { t } = useTranslation('common');
    return (
        <Layout>
            <Navbar isBordered variant="floating">
                <Navbar.Brand>
                    <Link href="/" color={"text"}>
                        <AcmeLogo />
                        <Text b color="inherit" hideIn="xs">
                            FindMe
                        </Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Content activeColor="error" hideIn="xs" variant="underline">
                    <Navbar.Link
                        isActive={router.pathname === "/"}
                        href="/"
                    >

                        {t('Header.top')}
                    </Navbar.Link>
                    <Navbar.Link
                        isActive={router.pathname === "/about"}
                        href="/about"
                    >
                        {t('Header.notice')}
                    </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="error" href="/login">
                        {t('Header.login')}
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto color="error" flat as={Link} href="/signup">
                            {t('Header.signup')}
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </Layout>
    )
}

export function Index_Cards(prop: any) {
    const MockItem = ({ text, url }: { text: string; url: string },) => {
        return (
            <Link href={url}>
                    <Card css={{
                        $$cardColor: '$colors$primary',
                        width: "450px",
                        height: "250px"
                    }}>
                        <Card.Body>
                            <Text h6 size={24} color="white" css={{ mt: 0 }}>
                                {text}
                            </Text>
                        </Card.Body>
                    </Card>
            </Link>
        );
    };

    return (
        <Grid.Container gap={3} justify="center">
            <Grid xs={4}>
                <MockItem text={"募集情報１"} url="/" />
            </Grid>
            <Grid xs={4}>
                <MockItem text={"募集情報２"} />
            </Grid>
            <Grid xs={4}>
                <MockItem text={"募集情報３"} />
            </Grid>
        </Grid.Container>
    );
}
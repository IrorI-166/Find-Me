import { Navbar, Button, Link, Text, Grid, Card, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { Layout } from "./header/Layout";
import { AcmeLogo } from "./header/AcmeLogo";
import { TooltipContent } from "./card_contents/TooltipContent";
import data from "@/testdata.json"

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

const TTset() {
    
}
export function Index_Cards(prop: any) {
    const MockItem = ({ text, url }: { text: string; url: string },) => {

        return (
            <Link href={url}>
                <Card css={{
                    $$cardColor: '$colors$primary',
                    width: "300px",
                    height: "150px"
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
            <Tooltip
                content={<TooltipContent title={data.username1.title} description={data.username1.description} />}
                trigger="hover"
                color="success"
                hideArrow
                css={{
                    width: "380px",
                    height: "200px"
                }}
            >
                <Grid xs={4}>
                    <MockItem text={"募集情報１"} url="/" />
                </Grid>
            </Tooltip>
            <Tooltip
                content={<TooltipContent />}
                trigger="hover"
                color="success"
                hideArrow
            >
                <Grid xs={4}>
                    <MockItem text={"募集情報２"} />
                </Grid>
            </Tooltip>
            <Tooltip
                content={<TooltipContent />}
                trigger="hover"
                color="success"
                hideArrow
            >
                <Grid xs={4}>
                    <MockItem text={"募集情報３"} />
                </Grid>
            </Tooltip>
        </Grid.Container>
    );
}
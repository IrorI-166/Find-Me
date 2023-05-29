import { Navbar, Button, Link, Text, Grid, Card, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { Layout } from "./header/Layout";
import { AcmeLogo } from "./header/AcmeLogo";
import { TT_set } from "@/components/Index_Components/card/TT_set"
import { Submite_Button } from "./search/Submite_Button";
import { Top_Users } from "@/data_tables/User_Data";
import { SearchBox_Placeholder } from "@/data_tables/SearchBox_Placeholder";

export function Index_Header(props: any) {
    const router = useRouter();
    const { t } = useTranslation('common');
    return (
        <Layout>
            <Navbar
            shouldHideOnScroll
            variant="sticky"
            >
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
            <TT_set index={0}>
                <Grid xs={4}>
                    <MockItem text={Top_Users[0].title} url={Top_Users[0].url} />
                </Grid>
            </TT_set>
            <TT_set index={1}>
                <Grid xs={4}>
                    <MockItem text={Top_Users[1].title} url={Top_Users[1].url} />
                </Grid>
            </TT_set>
            <TT_set index={2}>
                <Grid xs={4}>
                    <MockItem text={Top_Users[2].title} url={Top_Users[2].url} />
                </Grid>
            </TT_set>
        </Grid.Container>
    );
}

export function Index_Search({ }) {

    return (
        <Input
            size="xl"
            bordered
            placeholder={SearchBox_Placeholder}
            contentRight={
                <Submite_Button url="/" />
            }
            color="warning"
            css={{
                width: "400px"
            }}
        >
        </Input>
    )
}
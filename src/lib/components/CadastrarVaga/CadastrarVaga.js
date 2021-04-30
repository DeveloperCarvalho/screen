import React, { useState } from 'react';
import PropType from 'prop-types';
import styles from './CadastrarVaga.style';
import {
  Grid,
  Typography,
  useTheme,
  colors,
  Select,
  Input,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Pagination,
  Button,
  Checkbox,
} from '@bayon/commons';

const CadastrarVaga = () => {
  const theme = useTheme();
  const [docControl, setDocControl] = useState({
    page: 1,
    perPage: 25,
    count: 1,
    disableArrowRight: false,
    disableArrowLeft: true,
  });

  const options = [
    {
      label: 'Opção 1',
      value: 'opcao 1',
    },
    {
      label: 'Opção 2',
      value: 'opcao 2',
    },
    { label: 'Opção 3', value: 'opcao 3' },
    { label: 'Opção 4', value: 'opcao 4' },
  ];

  const rowsData = [
    {
      membro: 'João Silva',
      motivo: '',
      inicio: '02/04/2021',
      termino: '',
    },
  ];

  return (
    <React.Fragment>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <Typography component="h1" size={20} color="neutralPrimary">
            Cadastro de vagas
          </Typography>
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.containerContent}>
          <Typography
            component="h2"
            size={18}
            color="neutralPrimary"
            weight="semibold"
          >
            Adicionar vaga
          </Typography>
          <Grid container spacing={3} style={styles.form}>
            <Grid item xs={6}>
              <Select
                id="orgao"
                onChange={(e) => console.log(e)}
                required={true}
                label="Órgão"
                options={options}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="descricaoDaVaga"
                name="descricaoDaVaga"
                size="medium"
                onChange={(e) => console.log(e)}
                label="Descrição da vaga"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="area"
                name="area"
                placeholder="Criminal"
                size="medium"
                onChange={(e) => console.log(e)}
                disabled
                label="Área"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                id="procurador"
                onChange={(e) => console.log(e)}
                required={true}
                label="Procurador titular"
                options={options}
              />
            </Grid>
          </Grid>
          <hr style={styles.hr} />
          <Typography
            component="p"
            size={14}
            color="neutralSecondary"
            weight="bold"
          >
            Membro em atividade
          </Typography>
          <Table size="medium" style={styles.table}>
            <TableHead>
              <TableCell>Membro</TableCell>
              <TableCell>Motivo</TableCell>
              <TableCell>Inicio</TableCell>
              <TableCell>Término</TableCell>
              <TableCell></TableCell>
            </TableHead>
            <TableBody>
              {rowsData.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{data.membro || '-'}</TableCell>
                    <TableCell>{data.motivo || '-'}</TableCell>
                    <TableCell>{data.inicio || '-'}</TableCell>
                    <TableCell>{data.termino || '-'}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Pagination
            variant="items"
            nameItem="Histórico"
            onChangePage={(page) => {
              setDocControl({
                page,
                perPage: 25,
                count: 1,
                disableArrowLeft: page === 1,
                disableArrowRight:
                  page === Math.round(docControl.count / docControl.perPage),
              });
            }}
            onChangeItemPerPage={(something) => {
              setDocControl({
                ...docControl,
                perPage: something,
              });
            }}
            count={docControl.count}
            countPerPage={docControl.perPage}
            page={docControl.page}
            disableArrowRight={docControl.disableArrowRight}
            disableArrowLeft={docControl.disableArrowLeft}
          />
          <div style={styles.activityMember}>
            <Typography component="p" size={14} color="themePrimary">
              Ver histórico
            </Typography>
            <Button style={{ margin: '0 0 0 20px' }}>
              Alterar membro da atividade
            </Button>
          </div>
          <hr style={styles.hr} />
          <Typography
            component="p"
            size={14}
            color="neutralSecondary"
            weight="bold"
          >
            Configurações da vaga
          </Typography>
          <div style={styles.config}>
            <Checkbox
              name="permiteReuPreso"
              size="medium"
              label="Permite réu preso"
              onChange={(e) => console.log(e.target.name, e.target.checked)}
            />
            <div style={styles.configItem}>
              <Checkbox
                name="permiteDistribuirParaAMesmaVaga"
                size="medium"
                label="Permite distribuir para a mesma vaga (Sorteio)"
                onChange={(e) => console.log(e.target.name, e.target.checked)}
              />
            </div>
            <div style={styles.configItem}>
              <Checkbox
                name="considerarAsConfiguraçõesNaPrevencao"
                size="medium"
                label="Considerar as configurações na prevenção"
                onChange={(e) => console.log(e.target.name, e.target.checked)}
              />
            </div>
          </div>
          <hr style={styles.hr} />
          <Typography
            component="p"
            size={14}
            color="neutralSecondary"
            weight="bold"
          >
            Regras vinculadas (0)
          </Typography>
          <Grid item xs={6} style={{ margin: '15px 0 0 0' }}>
            <Select
              footerContent=""
              id="rule"
              onChange={(e) => console.log(e)}
              options={[]}
            />
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CadastrarVaga;

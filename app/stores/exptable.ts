import { FilterMatchMode } from '@primevue/core/api'
import C_Fetch from '~/utils/fetch'
import C_Form from '~/utils/form'

export interface I_Table {
    id: number
    tblidx: number
    dwExp: number
    dwNeed_Exp: number
    wStageWinSolo: number
    wStageDrawSolo: number
    wStageLoseSolo: number
    wWinSolo: number
    wPerfectWinSolo: number
    wStageWinTeam: number
    wStageDrawTeam: number
    wStageLoseTeam: number
    wWinTeam: number
    wPerfectWinTeam: number
    wNormal_Race: number
    wSuperRace: number
    dwMobExp: number
    dwPhyDefenceRef: number
    dwEngDefenceRef: number
    dwMobZenny: number
}

interface I_Column {
    field: String
    header: String
}

type Row = Record<string, any>;

export const defaultTable: I_Table = {
    id: 0, 
    tblidx: 4294967295,
    dwExp: 4294967295,
    dwNeed_Exp: 4294967295,
    wStageWinSolo: 65535,
    wStageDrawSolo: 65535,
    wStageLoseSolo: 65535,
    wWinSolo: 65535,
    wPerfectWinSolo: 65535,
    wStageWinTeam: 65535,
    wStageDrawTeam: 65535,
    wStageLoseTeam: 65535,
    wWinTeam: 65535,
    wPerfectWinTeam: 65535,
    wNormal_Race: 65535,
    wSuperRace: 65535,
    dwPhyDefenceRef: 4294967295,
    dwEngDefenceRef: 4294967295,
    dwMobExp: 4294967295,
    dwMobZenny: 4294967295
}

export const defaultFilterConfig = {
    tblidx: { value: null, matchMode: FilterMatchMode.CONTAINS },
    dwExp: { value: null, matchMode: FilterMatchMode.CONTAINS },
    dwNeed_Exp: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wStageWinSolo: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wStageDrawSolo: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wStageLoseSolo: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wWinSolo: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wPerfectWinSolo: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wStageWinTeam: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wStageDrawTeam: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wStageLoseTeam: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wWinTeam: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wPerfectWinTeam: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wNormal_Race: { value: null, matchMode: FilterMatchMode.CONTAINS },
    wSuperRace: { value: null, matchMode: FilterMatchMode.CONTAINS },
    dwPhyDefenceRef: { value: null, matchMode: FilterMatchMode.CONTAINS },
    dwEngDefenceRef: { value: null, matchMode: FilterMatchMode.CONTAINS },
    dwMobExp: { value: null, matchMode: FilterMatchMode.CONTAINS },
    dwMobZenny: { value: null, matchMode: FilterMatchMode.CONTAINS },
}

export const defaultColumns = [
    {field: 'tblidx', header: 'Tblidx'},
    {field: 'dwExp', header: 'Exp'},
    {field: 'dwNeed_Exp', header: 'Need Exp'},
    {field: 'wStageWinSolo', header: 'Stage Win Solo'},
    {field: 'wStageDrawSolo', header: 'Stage Draw Solo'},
    {field: 'wStageLoseSolo', header: 'Stage Lose Solo'},
    {field: 'wWinSolo', header: 'Win Solo'},
    {field: 'wPerfectWinSolo', header: 'Perfect Win Solo'},
    {field: 'wStageWinTeam', header: 'Stage Win Team'},
    {field: 'wStageDrawTeam', header: 'Stage Draw Team'},
    {field: 'wStageLoseTeam', header: 'Stage Lose Team'},
    {field: 'wWinTeam', header: 'Win Team'},
    {field: 'wPerfectWinTeam', header: 'Perfect Win Team'},
    {field: 'wNormal_Race', header: 'Normal Race'},
    {field: 'wSuperRace', header: 'Super Race'},
    {field: 'dwPhyDefenceRef', header: 'Phy. Def. Ref.'},
    {field: 'dwEngDefenceRef', header: 'Eng. Def. Ref.'},
    {field: 'dwMobExp', header: 'Mob Exp'},
    {field: 'dwMobZenny', header: 'Mob Zenny'},
]

interface TableState<T> {
    appVersion: string
    tableData: T[]
    filters: Record<string, any>
    columns: I_Column[]
    selectedColumns: I_Column[]
    dataTableRef: null | any
    selectedRow: T | null
    editingRows: T[]
    loading: boolean
    dialog: {
        visible: boolean
        add: boolean
    }
    duplicateDialog: boolean
    deleteDialog: boolean
    deleteConfirm: string
    table: T
}

export const useExpTableStore = defineStore('exptable', {
    state: (): TableState<I_Table> => ({
      appVersion: useRuntimeConfig().public.APP_VERSION,
      tableData: [],
      filters: {},
      columns: [],
      selectedColumns: [],
      dataTableRef: null,
      selectedRow: null,
      editingRows: [],
      loading: false,
      dialog: {
        visible: false,
        add: false
      },
      duplicateDialog: false,
      deleteDialog: false,
      deleteConfirm: '',
      table: {...defaultTable},
    }),
    getters: {
        highestTblidx(): number {
            return Math.max(...this.tableData.map(row => row.tblidx), 0);
        },
    },
    actions: {
        async initData() {
            if (this.tableData.length === 0) {
                C_Fetch('exp-tables/')
                    .then(res => { this.tableData = res })
                    .catch(error => console.error(error))
            }
        },
        initFilters(filterConfig: Record<string, any>) {
            this.filters = filterConfig
        },
        onToggle(val: any) {
            this.selectedColumns = this.columns.filter(col => val.some((v: any) => v.header === col.header));
            if (this.selectedColumns.length > 0) {
                localStorage.setItem("exptable_columns", JSON.stringify(this.selectedColumns));
            }
        },

        onShowDialog(addDialog = true) {
            this.dialog.visible = true;
            this.dialog.add = addDialog;
            if (!addDialog && this.selectedRow) 
                this.table = {...this.selectedRow};
        },
        onConfirmAddDialog(toast: any) {
            C_Fetch('exp-tables/', 'post', this.table as any)
                .then(res => { 
                    toast.add({ severity: 'info', summary: 'Success', detail: `Tblidx: ${res.tblidx} added.`, group: 'headless', styleClass: 'backdrop-blur-lg rounded-2xl', life: 3000 });
                    this.tableData = [...this.tableData, {...res}]
                    this.selectedRow = {...this.table};
                })
                .catch(error => console.error(error))
                .finally(() => this.onCancelDialog())
        },
        onConfirmEditDialog(toast: any) {
            C_Fetch('exp-tables/' + this.table.id, 'put', this.table as any)
                .then(res => { 
                    toast.add({ severity: 'info', summary: 'Success', detail: `Tblidx: ${res.tblidx} edited.`, group: 'headless', styleClass: 'backdrop-blur-lg rounded-2xl', life: 3000 });
                    this.tableData = this.tableData.map(row => 
                        row.tblidx === res.tblidx ? res : row
                    );
                    this.selectedRow = {...this.table};
                })
                .catch(error => console.error(error))
                .finally(() => this.onCancelDialog())
        },
        onCancelDialog() {
            this.table = {...defaultTable};
            this.dialog.visible = false;
        },
        
        onShowDuplicateDialog() {
            this.duplicateDialog = true;
            if (this.selectedRow) 
                this.table = {...this.selectedRow};
        },
        onConfirmDuplicateDialog(toast: any) {
            C_Fetch('exp-tables/', 'post', this.table as any)
                .then(res => { 
                    toast.add({ severity: 'info', summary: 'Success', detail: `Tblidx: ${res.tblidx} duplicated.`, group: 'headless', styleClass: 'backdrop-blur-lg rounded-2xl', life: 3000 });
                    this.tableData = [...this.tableData, {...res}]
                    this.selectedRow = {...this.table};
                })
                .catch(error => console.error(error))
                .finally(() => this.onCancelDuplicateDialog())
        },
        onCancelDuplicateDialog() {
            this.table = {...defaultTable};
            this.duplicateDialog = false;
        },

        onConfirmDeleteDialog(toast: any) {
            if (this.deleteConfirm.toLowerCase() === "confirm") {
                C_Fetch('exp-tables/' + this.selectedRow?.id, 'delete')
                .then(() => { 
                    toast.add({ severity: 'info', summary: 'Success', detail: `Tblidx: ${this.selectedRow?.tblidx} deleted.`, group: 'headless', styleClass: 'backdrop-blur-lg rounded-2xl', life: 3000 });
                    this.tableData = this.tableData.filter(row => row.tblidx !== this.selectedRow?.tblidx);
                    this.selectedRow = null;
                })
                .catch(error => console.error(error))
                .finally(() => this.deleteDialog = false)
            }
        },
        
        async onUpload(toast: any) {
            toast.add({ severity: 'info', summary: 'Success', detail: 'CSV file successfully uploaded.', group: 'headless', styleClass: 'backdrop-blur-lg rounded-2xl', life: 3000 });
            await this.initData()
        },
        exportCSV() {
            const columns: I_Column[] = this.columns; 
            const data: Row[] = this.tableData; 

            const headers = columns.map(col => col.field); 
            const rows = data.map(row =>
                columns.map(col => row[col.field as keyof Row] || '')
            );

            const csvContent = [headers, ...rows]
                .map(row => row.join(','))
                .join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', 'tableData.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        async importCSV(event: any) {
            console.log('file', event.files[0]);
            const formData = new FormData();
            formData.append('file', event.files[0]);
            try {
                const response = await C_Form('exp-tables/import', formData as any);
                console.log('File uploaded successfully:', response);
        
                // Optionally refresh table data
                // await this.initData();
            } catch (error: any) {
                console.error('Error importing CSV:', error.message);
            }
            // .then(async () => { 
            //     this.tableData = [];
            //     this.selectedRow = null;
            //     //await this.initData()
            // })
            // .catch(error => console.error(error))
        }
    },
  })
  
  if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useExpTableStore, import.meta.hot))
  
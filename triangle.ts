class Triangle implements BaseShape {
    private mverticies: THREE.Vector3[];
    get verticies(): THREE.Vector3[] {
        return this.mverticies;
    }
 
    private mcolor: THREE.Color;
    get color(): THREE.Color {
        return this.mcolor;
    }
 
    private mka: number;
    get ka(): number {
        return this.mka;
    }
 
    private mkd: number;
    get kd(): number {
        return this.mkd;
    }
 
    private mks: number;
    get ks(): number {
        return this.mks;
    }
 
    private mn: number;
    get n(): number {
        return this.mn;
    }
 
    private mnormal: THREE.Vector3;
    get normal(): THREE.Vector3{
        return this.mnormal;
    }
 
    constructor(p0: THREE.Vector3, p1: THREE.Vector3, p2: THREE.Vector3, color: THREE.Color, ia: number, id: number, is: number, n: number)
    {
        this.mverticies = new Array();
        this.mverticies[0] = new THREE.Vector3().copy(p0);
        this.mverticies[1] = new THREE.Vector3().copy(p1);
        this.mverticies[2] = new THREE.Vector3().copy(p2);
        this.mcolor = new THREE.Color;
        this.mcolor.copy(color);
        this.mka = ia;
        this.mkd = id;
        this.mks = is;
        this.mn = n;
 
        //法線を計算，時計回りを表面とする
        var v1 = new THREE.Vector3().subVectors(this.verticies[2], this.verticies[0]);
        var v2 = new THREE.Vector3().subVectors(this.verticies[1], this.verticies[0]);
        this.mnormal = new THREE.Vector3().crossVectors(v1, v2).normalize();
    }
 
    calcT(e: THREE.Vector3, v: THREE.Vector3): number {
        //第11回課題       
        return -1;
    }
 
    calcNorm(p: THREE.Vector3): THREE.Vector3 {
        return this.normal.clone();
    }
 
    calcShading(q: PointLight, p: THREE.Vector3, e: THREE.Vector3, v: THREE.Vector3, numdepth: number, scene: RTScene): THREE.Color {
        //第10回課題
        //    +
        //今回の課題
        return this.color;
    }
    
 }
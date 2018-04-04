import { interfaces } from "../interfaces/interfaces";
declare class Container implements interfaces.Container {
    guid: string;
    parent: interfaces.Container | null;
    readonly options: interfaces.ContainerOptions;
    private _middleware;
    private _bindingDictionary;
    private _snapshots;
    private _metadataReader;
    static merge(container1: interfaces.Container, container2: interfaces.Container): interfaces.Container;
    constructor(containerOptions?: interfaces.ContainerOptions);
    load(...modules: interfaces.ContainerModule[]): void;
    loadAsync(...modules: interfaces.AsyncContainerModule[]): Promise<void>;
    unload(...modules: interfaces.ContainerModule[]): void;
    bind<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): interfaces.BindingToSyntax<T>;
    rebind<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): interfaces.BindingToSyntax<T>;
    unbind(serviceIdentifier: interfaces.ServiceIdentifier<any>): void;
    unbindAll(): void;
    isBound(serviceIdentifier: interfaces.ServiceIdentifier<any>): boolean;
    isBoundNamed(serviceIdentifier: interfaces.ServiceIdentifier<any>, named: string | number | symbol): boolean;
    isBoundTagged(serviceIdentifier: interfaces.ServiceIdentifier<any>, key: string | number | symbol, value: any): boolean;
    snapshot(): void;
    restore(): void;
    createChild(): Container;
    applyMiddleware(...middlewares: interfaces.Middleware[]): void;
    applyCustomMetadataReader(metadataReader: interfaces.MetadataReader): void;
    get<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T;
    getTagged<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>, key: string | number | symbol, value: any): T;
    getNamed<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>, named: string | number | symbol): T;
    getAll<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T[];
    getAllTagged<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>, key: string | number | symbol, value: any): T[];
    getAllNamed<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>, named: string | number | symbol): T[];
    resolve<T>(constructorFunction: interfaces.Newable<T>): T;
    private _getContainerModuleHelpersFactory();
    private _get<T>(avoidConstraints, isMultiInject, targetType, serviceIdentifier, key?, value?);
    private _planAndResolve<T>();
}
export { Container };
